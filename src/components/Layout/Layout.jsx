import PropTypes from 'prop-types'
import { Header } from '../Header/Header.jsx'
import { Footer } from '../Footer/Footer.jsx'
import styles from './Layout.module.css'

export function Layout({ children, user, onLogout }) {
  return (
    <div className={styles.layout}>
      <Header user={user} onLogout={onLogout} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.shape({
    nombre: PropTypes.string,
    correo: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
}
