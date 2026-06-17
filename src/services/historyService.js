const API_URL = 'http://localhost:3000/api/historial'

export async function getHistory(usuarioId) {
  const response = await fetch(`${API_URL}/${usuarioId}`)
  if (!response.ok) {
    throw new Error('Error al obtener historial')
  }
  return response.json()
}

export async function saveCalculation(usuarioId, tipoCalculo, datosIngresados, resultado) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuarioId, tipoCalculo, datosIngresados, resultado }),
  })
  if (!response.ok) {
    throw new Error('Error al guardar cálculo')
  }
  return response.json()
}

export async function deleteHistoryEntry(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('Error al eliminar registro')
  }
  return response.json()
}
