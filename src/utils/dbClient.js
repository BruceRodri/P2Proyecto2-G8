// CLIENTE DE BASE DE DATOS - COMUNICACION DIRECTA CON EL BACKEND
const API_BASE_URL = 'http://localhost:4000/api'

// EJECUTA UNA CONSULTA SQL ARBITRARIA ENVIANDOLA AL BACKEND
export async function executeQuery(query, params = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, params }),
    })

    if (!response.ok) {
      throw new Error('Error al ejecutar la query')
    }

    return await response.json()
  } catch (error) {
    console.error('Error en executeQuery:', error)
    throw error
  }
}

// VERIFICA SI EL SERVIDOR ESTA CORRIENDO MEDIANTE EL ENDPOINT /api/health
export async function checkConnection() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`)
    return response.ok
  } catch {
    return false
  }
}
