const API_URL = 'http://localhost:3000/api/probabilidad'

export async function calculatePermutation(n, r) {
  const response = await fetch(`${API_URL}/permutacion`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ n, r }),
  })
  if (!response.ok) {
    throw new Error('Error al calcular permutación')
  }
  return response.json()
}

export async function calculateCombination(n, r) {
  const response = await fetch(`${API_URL}/combinacion`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ n, r }),
  })
  if (!response.ok) {
    throw new Error('Error al calcular combinación')
  }
  return response.json()
}

export async function calculateSimpleProbability(favorables, posibles) {
  const response = await fetch(`${API_URL}/probabilidad-simple`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ favorables, posibles }),
  })
  if (!response.ok) {
    throw new Error('Error al calcular probabilidad')
  }
  return response.json()
}

export async function getProbabilityHistory(usuarioId) {
  const response = await fetch(`${API_URL}/historial/${usuarioId}`)
  if (!response.ok) {
    throw new Error('Error al obtener historial')
  }
  return response.json()
}
