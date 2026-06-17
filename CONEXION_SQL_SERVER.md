# Configuración de Conexión a SQL Server

## ✅ Lo que se ha configurado

### 1. **Servidor Express** (`server.js`)
- Servidor minimalista que conecta directamente a SQL Server
- Puerto: 4000 (configurable en `.env` con `SERVER_PORT`)
- Rutas implementadas:
  - `POST /api/usuarios/register` - Registrar usuarios
  - `POST /api/usuarios/login` - Login de usuarios
  - `POST /api/query` - Ejecutar queries personalizadas
  - `GET /api/health` - Verificar conexión

### 2. **Cliente BD** (`src/utils/dbClient.js`)
- Funciones para conectar desde React al servidor
- `executeQuery()` - Ejecutar queries personalizadas
- `checkConnection()` - Verificar conexión al servidor

### 3. **Servicio de Autenticación** (actualizado)
- `authService.js` ahora apunta a `localhost:4000`
- Maneja registro y login con SQL Server

### 4. **Dependencias instaladas**
```json
- express: Servidor web
- mssql: Driver para SQL Server
- cors: Permitir requests desde React
- dotenv: Leer variables de entorno
```

---

## 🚀 Cómo usar

### Paso 1: Verificar la configuración en `.env`
```
DB_HOST=localhost
DB_PORT=1433
DB_NAME=MathStats
DB_USER=sa
DB_PASS=sa
SERVER_PORT=4000
```

### Paso 2: Crear la tabla de usuarios (si no existe)
Ejecuta esto en SQL Server Management Studio:
```sql
CREATE TABLE usuarios (
    id INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(100) NOT NULL,
    fecha_creacion DATETIME DEFAULT GETDATE()
)
```

### Paso 3: Ejecutar en 2 terminales

**Terminal 1 - Servidor:**
```bash
npm run server
```
Debe mostrar: `✅ Conectado a SQL Server` y `🚀 Servidor ejecutándose en http://localhost:4000`

**Terminal 2 - Aplicación React:**
```bash
npm run dev
```

---

## 📝 Ejemplo de uso en componentes

### Login
```javascript
import { loginUser } from '../services/authService'

async function handleLogin() {
  try {
    const user = await loginUser(correo, contraseña)
    localStorage.setItem('mathstats_user', JSON.stringify(user))
  } catch (error) {
    console.error('Error:', error.message)
  }
}
```

### Query personalizada
```javascript
import { executeQuery } from '../utils/dbClient'

async function getStats() {
  try {
    const results = await executeQuery('SELECT * FROM estadisticas')
    console.log(results)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

---

## 🔒 Seguridad
- ✅ Las credenciales de BD están en `.env` (no expuestas al cliente)
- ✅ React no accede directamente a SQL Server (va a través del servidor)
- ✅ CORS configurado para permitir solo localhost

---

## 🛠️ Agregar más rutas al servidor

Edita `server.js` y agrega rutas como:
```javascript
app.post('/api/estadisticas', async (req, res) => {
  try {
    const result = await pool
      .request()
      .query('SELECT * FROM estadisticas')
    res.json(result.recordset)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
```

Luego desde React:
```javascript
const stats = await fetch('http://localhost:4000/api/estadisticas').then(r => r.json())
```

