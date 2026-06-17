const API_URL = 'http://localhost:3000/api/estadistica'

export const calculateStatistics = async (numeros) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ numeros }),
  })
  if (!response.ok) {
    throw new Error('Error al calcular estadística')
  }
  return response.json()
}

export const getStatisticsHistory = async (usuarioId) => {
  const response = await fetch(`${API_URL}/historial/${usuarioId}`)
  if (!response.ok) {
    throw new Error('Error al obtener historial')
  }
  return response.json()
}
