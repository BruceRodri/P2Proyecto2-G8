// SERVICIO DE HISTORIAL - CRUD DE CALCULOS GUARDADOS POR EL USUARIO
const API_URL = 'http://localhost:4000/api/historial'

// OBTIENE TODO EL HISTORIAL DE UN USUARIO POR SU ID
export const getHistory = async (usuarioId) => {
  const response = await fetch(`${API_URL}/${usuarioId}`)
  if (!response.ok) {
    throw new Error('Error al obtener historial')
  }
  return response.json()
}

// GUARDA UN NUEVO CALCULO EN EL HISTORIAL (TIPO, DATOS INGRESADOS Y RESULTADO)
export const saveCalculation = async (usuarioId, tipoCalculo, datosIngresados, resultado) => {
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

// ELIMINA UN REGISTRO DEL HISTORIAL POR SU ID
export const deleteHistoryEntry = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('Error al eliminar registro')
  }
  return response.json()
}
