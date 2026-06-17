const API_URL = 'http://localhost:4000/api/noticias'

export const fetchMathNews = async () => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Error al obtener noticias')
    }
    return response.json()
  } catch (error) {
    console.error('Error en fetchMathNews:', error)
    throw error
  }
}
