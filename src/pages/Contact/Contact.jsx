import { FiMail, FiGithub } from 'react-icons/fi'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}><FiMail /> Contacto</h1>
      <p className={styles.desc}>Ponte en contacto con nosotros.</p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <FiMail className={styles.icon} />
          <h2>Correo Electrónico</h2>
          <a href="mailto:blrodriguez4@espe.edu.ec" className={styles.emailLink}>blrodriguez4@espe.edu.ec</a>
          <a href="mailto:ajushina@espe.edu.ec" className={styles.emailLink}>ajushina@espe.edu.ec</a>
        </div>

        <div className={styles.card}>
          <FiGithub className={styles.icon} />
          <h2>GitHub</h2>
          <a href="https://github.com/BruceRodri/P2Proyecto2-G8" target="_blank" rel="noopener noreferrer" className={styles.link}>
            github.com/BruceRodri
          </a>
        </div>

        <div className={styles.card}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
            <path d="M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17a4.77 4.77 0 0 0-8.13 4.35C7.16 9.5 4 7.92 1.76 5.46a4.77 4.77 0 0 0 1.48 6.37c-.76-.02-1.48-.23-2.1-.58v.06a4.77 4.77 0 0 0 3.83 4.68c-.7.2-1.44.22-2.16.08a4.77 4.77 0 0 0 4.46 3.32 9.56 9.56 0 0 1-5.92 2.04c-.38 0-.76-.02-1.14-.07a13.48 13.48 0 0 0 7.3 2.14c8.76 0 13.55-7.26 13.55-13.55 0-.2 0-.42-.02-.63A9.7 9.7 0 0 0 24 4.56a9.5 9.5 0 0 1-2.54.7z" />
          </svg>
          <h2>Redes Sociales</h2>
          <p>Síguenos en .... pronto</p>
        </div>
      </div>
    </div>
  )
}
