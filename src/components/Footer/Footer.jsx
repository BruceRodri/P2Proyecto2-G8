import { FiGithub, FiMail } from 'react-icons/fi'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>&copy; {year} MathStats. Todos los derechos reservados</p>
        <div className={styles.links}>
          <a href="https://github.com/BruceRodri/P2Proyecto2-G8" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FiGithub /> GitHub
          </a>
          <a href="mailto:blrodriguez4@espe.edu.ec" className={styles.link}>
            <FiMail /> blrodriguez4@espe.edu.ec
          </a>

        </div>
      </div>
    </footer>
  )
}
