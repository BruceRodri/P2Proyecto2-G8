import { useState, useEffect } from 'react'
import { FiFileText } from 'react-icons/fi'
import { fetchMathNews } from '../../services/newsService.js'
import styles from './News.module.css'

export function News() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchMathNews()
        setArticles(data.articles || [])
      } catch {
        setError('No se pudieron cargar las noticias.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className={styles.page}>
      <h1 className={styles.title}><FiFileText /> Noticias</h1>
      <p className={styles.desc}>Noticias de matemáticas, ciencia y tecnología.</p>
      {loading && <p className={styles.status}>Cargando noticias...</p>}
      {error && <p className={styles.status}>{error}</p>}
      <div className={styles.grid}>
        {articles.map((a, i) => (
          <article key={i} className={styles.card}>
            {a.urlToImage && <img src={a.urlToImage} alt={a.title} className={styles.img} />}
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.cardDesc}>{a.description}</p>
              <div className={styles.footer}>
                <span className={styles.source}>{a.source?.name}</span>
                <a href={a.url} target="_blank" rel="noopener noreferrer" className={styles.link}>Leer más</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
