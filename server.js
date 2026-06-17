import express from 'express'
import sql from 'mssql'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Configuración de conexión a SQL Server
const config = {
  server: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 1433,
  database: process.env.DB_NAME || 'MathStats',
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASS || 'sa',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
}

// Crear pool de conexión
let pool

async function initPool() {
  try {
    pool = new sql.ConnectionPool(config)
    await pool.connect()
    console.log('✅ Conectado a SQL Server')
  } catch (error) {
    console.error('❌ Error conectando a SQL Server:', error)
    process.exit(1)
  }
}

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor funcionando' })
})

// Ruta para registrar usuario
app.post('/api/usuarios/register', async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body

    // Verificar si el usuario ya existe
    const existingUser = await pool
      .request()
      .input('correo', sql.VarChar, correo)
      .query('SELECT * FROM usuarios WHERE correo = @correo')

    if (existingUser.recordset.length > 0) {
      return res.status(400).json({ error: 'El correo ya está registrado' })
    }

    // Insertar nuevo usuario
    await pool
      .request()
      .input('nombre', sql.VarChar, nombre)
      .input('correo', sql.VarChar, correo)
      .input('contraseña', sql.VarChar, contraseña)
      .query(
        'INSERT INTO usuarios (nombre, correo, contraseña) VALUES (@nombre, @correo, @contraseña)'
      )

    res.json({ success: true, message: 'Usuario registrado correctamente' })
  } catch (error) {
    console.error('Error al registrar:', error)
    res.status(500).json({ error: error.message })
  }
})

// Ruta para login
app.post('/api/usuarios/login', async (req, res) => {
  try {
    const { correo, contraseña } = req.body

    const result = await pool
      .request()
      .input('correo', sql.VarChar, correo)
      .input('contraseña', sql.VarChar, contraseña)
      .query(
        'SELECT id, nombre, correo FROM usuarios WHERE correo = @correo AND contraseña = @contraseña'
      )

    if (result.recordset.length === 0) {
      return res.status(401).json({ error: 'Credenciales inválidas' })
    }

    res.json(result.recordset[0])
  } catch (error) {
    console.error('Error al login:', error)
    res.status(500).json({ error: error.message })
  }
})

// Rutas de historial
app.get('/api/historial/:usuarioId', async (req, res) => {
  try {
    const { usuarioId } = req.params
    const result = await pool
      .request()
      .input('usuarioId', sql.Int, usuarioId)
      .query(
        'SELECT id, usuarioId, tipoCalculo, datosIngresados, resultado, fecha FROM historial WHERE usuarioId = @usuarioId ORDER BY fecha DESC'
      )

    res.json(result.recordset)
  } catch (error) {
    console.error('Error al obtener historial:', error)
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/historial', async (req, res) => {
  try {
    const { usuarioId, tipoCalculo, datosIngresados, resultado } = req.body

    await pool
      .request()
      .input('usuarioId', sql.Int, usuarioId)
      .input('tipoCalculo', sql.VarChar, tipoCalculo)
      .input('datosIngresados', sql.NVarChar, datosIngresados)
      .input('resultado', sql.NVarChar, resultado)
      .query(
        'INSERT INTO historial (usuarioId, tipoCalculo, datosIngresados, resultado) VALUES (@usuarioId, @tipoCalculo, @datosIngresados, @resultado)'
      )

    res.json({ success: true, message: 'Registro de historial guardado' })
  } catch (error) {
    console.error('Error al guardar historial:', error)
    res.status(500).json({ error: error.message })
  }
})

app.delete('/api/historial/:id', async (req, res) => {
  try {
    const { id } = req.params
    await pool
      .request()
      .input('id', sql.Int, id)
      .query('DELETE FROM historial WHERE id = @id')

    res.json({ success: true, message: 'Registro eliminado' })
  } catch (error) {
    console.error('Error al eliminar historial:', error)
    res.status(500).json({ error: error.message })
  }
})

// Ruta genérica para ejecutar queries
app.post('/api/query', async (req, res) => {
  try {
    const { query, params } = req.body

    let request = pool.request()

    // Agregar parámetros si existen
    if (params) {
      Object.keys(params).forEach((key) => {
        request.input(key, params[key])
      })
    }

    const result = await request.query(query)
    res.json(result.recordset)
  } catch (error) {
    console.error('Error en query:', error)
    res.status(500).json({ error: error.message })
  }
})

// Ruta para obtener noticias
app.get('/api/noticias', async (req, res) => {
  try {
    const NEWSAPI_URL = process.env.NEWSAPI_URL
    const NEWSAPI_KEY = process.env.NEWSAPI_KEY

    let response
    if (NEWSAPI_URL) {
      response = await fetch(NEWSAPI_URL)
    } else {
      if (!NEWSAPI_KEY || NEWSAPI_KEY === 'YOUR_NEWSAPI_KEY') {
        return res.status(400).json({ error: 'API Key de noticias no configurada' })
      }

      const query = 'mathematics OR statistics OR science OR technology'
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=es&pageSize=12&sortBy=publishedAt`,
        {
          headers: { 'X-Api-Key': NEWSAPI_KEY },
        }
      )
    }

    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status}`)
    }

    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error('Error al obtener noticias:', error)
    res.status(500).json({ error: error.message })
  }
})

// Iniciar servidor
const PORT = process.env.SERVER_PORT || 4000

initPool().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`)
  })
})

// Graceful shutdown
process.on('SIGINT', async () => {
  if (pool) {
    await pool.close()
  }
  process.exit(0)
})
