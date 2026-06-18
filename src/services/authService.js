// USA localStorage PARA MANTENER LA SESION DEL USUARIO
const API_URL = 'http://localhost:4000/api/usuarios'

// REGISTRA UN NUEVO USUARIO ENVIANDO NOMBRE, CORREO Y CONTRASENA AL BACKEND
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

// INICIA SESION ENVIANDO CORREO Y CONTRASENA, DEVUELVE LOS DATOS DEL USUARIO
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

// ELIMINA EL USUARIO DEL localStorage AL CERRAR SESION
export const logoutUser = () => {
  localStorage.removeItem('mathstats_user')
}

// RECUPERA EL USUARIO GUARDADO EN localStorage (PARA MANTENER SESION AL RECARGAR)
export const getCurrentUser = () => {
  const stored = localStorage.getItem('mathstats_user')
  return stored ? JSON.parse(stored) : null
}

// GUARDA EL USUARIO EN localStorage DESPUES DE LOGIN O REGISTRO
export const setCurrentUser = (user) => {
  localStorage.setItem('mathstats_user', JSON.stringify(user))
}
