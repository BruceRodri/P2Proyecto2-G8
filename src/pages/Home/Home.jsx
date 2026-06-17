import { Link } from 'react-router-dom'
import { FiBarChart2, FiTrendingUp, FiClock, FiFileText } from 'react-icons/fi'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1 className={styles.title}>MathStats</h1>
        <p className={styles.subtitle}>Calculadora de Estadística y Probabilidad</p>
        <p className={styles.description}>
          Resuelve cálculos estadísticos y probabilísticos de forma rápida y sencilla.
          Registra tus operaciones y consulta tu historial.
        </p>
      </section>

      <section className={styles.cards}>
        <Link to="/estadistica" className={styles.card}>
          <FiBarChart2 className={styles.cardIcon} />
          <h2 className={styles.cardTitle}>Estadística</h2>
          <p className={styles.cardText}>Media, mediana, moda, varianza, desviación estándar y rango</p>
        </Link>
        <Link to="/probabilidad" className={styles.card}>
          <FiTrendingUp className={styles.cardIcon} />
          <h2 className={styles.cardTitle}>Probabilidad</h2>
          <p className={styles.cardText}>Permutaciones, combinaciones y probabilidad simple</p>
        </Link>
        <Link to="/historial" className={styles.card}>
          <FiClock className={styles.cardIcon} />
          <h2 className={styles.cardTitle}>Historial</h2>
          <p className={styles.cardText}>Consulta todas tus operaciones realizadas</p>
        </Link>
        <Link to="/noticias" className={styles.card}>
          <FiFileText className={styles.cardIcon} />
          <h2 className={styles.cardTitle}>Noticias</h2>
          <p className={styles.cardText}>Noticias de matemáticas, ciencia y tecnología</p>
        </Link>
      </section>
    </div>
  )
}
