const API_URL = 'http://localhost:3000/api/usuarios'

export async function registerUser(nombre, correo, contraseña) {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, correo, contraseña }),
  })
  if (!response.ok) {
    throw new Error('Error al registrar usuario')
  }
  return response.json()
}

export async function loginUser(correo, contraseña) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ correo, contraseña }),
  })
  if (!response.ok) {
    throw new Error('Credenciales inválidas')
  }
  return response.json()
}

export function logoutUser() {
  localStorage.removeItem('mathstats_user')
}

export function getCurrentUser() {
  const stored = localStorage.getItem('mathstats_user')
  return stored ? JSON.parse(stored) : null
}

export function setCurrentUser(user) {
  localStorage.setItem('mathstats_user', JSON.stringify(user))
}
