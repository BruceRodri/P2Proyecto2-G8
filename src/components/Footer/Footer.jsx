import { FiGithub, FiMail } from 'react-icons/fi'
import styles from './Footer.module.css'

export function Footer() {
  // OBTIENE EL ANIO ACTUAL
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>{year} MathStats. Todos los derechos reservados.</p>
        <div className={styles.links}>
          <a href="https://github.com/BruceRodri/P2Proyecto2-G8" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FiGithub /> GitHub
          </a>
          <a href="mailto:contacto@mathstats.com" className={styles.link}>
            <FiMail /> contacto@mathstats.com
          </a>
        </div>
      </div>
    </footer>
  )
}
