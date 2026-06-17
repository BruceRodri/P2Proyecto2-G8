const API_URL = 'https://newsapi.org/v2/everything'

const API_KEY = 'YOUR_NEWSAPI_KEY'

export async function fetchMathNews() {
  const query = 'mathematics OR statistics OR science OR technology'
  const response = await fetch(
    `${API_URL}?q=${encodeURIComponent(query)}&language=es&pageSize=12`,
    {
      headers: { 'X-Api-Key': API_KEY },
    }
  )
  if (!response.ok) {
    throw new Error('Error al obtener noticias')
  }
  return response.json()
}
