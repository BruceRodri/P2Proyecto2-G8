const API_BASE_URL = 'http://localhost:4000/api'

/**
 * Ejecutar una query personalizada en la BD
 * @param {string} query - SQL query
 * @param {object} params - Parámetros de la query
 * @returns {Promise<Array>} Resultado de la query
 */
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

/**
 * Verificar la conexión al servidor
 * @returns {Promise<boolean>}
 */
export async function checkConnection() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`)
    return response.ok
  } catch {
    return false
  }
}
