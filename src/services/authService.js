const API_URL = 'http://localhost:4000/api/usuarios'

export const registerUser = async (nombre, correo, contraseña) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, correo, contraseña }),
    })
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Error al registrar usuario')
    }
    return response.json()
  } catch (error) {
    console.error('Error en registerUser:', error)
    throw error
  }
}

export const loginUser = async (correo, contraseña) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correo, contraseña }),
    })
    if (!response.ok) {
      throw new Error('Credenciales inválidas')
    }
    return response.json()
  } catch (error) {
    console.error('Error en loginUser:', error)
    throw error
  }
}

export const logoutUser = () => {
  localStorage.removeItem('mathstats_user')
}

export const getCurrentUser = () => {
  const stored = localStorage.getItem('mathstats_user')
  return stored ? JSON.parse(stored) : null
}

export const setCurrentUser = (user) => {
  localStorage.setItem('mathstats_user', JSON.stringify(user))
}
