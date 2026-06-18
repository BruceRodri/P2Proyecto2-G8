import { Link } from 'react-router-dom'
import { FiHome, FiBarChart2, FiTrendingUp, FiClock, FiFileText, FiUsers, FiMail, FiLogIn, FiLogOut, FiUserPlus } from 'react-icons/fi'
import PropTypes from 'prop-types'
import styles from './Header.module.css'

export function Header({ user, onLogout }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <FiBarChart2 className={styles.logoIcon} />
          <span>MathStats</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}><FiHome /> Inicio</Link>
          <Link to="/estadistica" className={styles.link}><FiBarChart2 /> Estadística</Link>
          <Link to="/probabilidad" className={styles.link}><FiTrendingUp /> Probabilidad</Link>
          <Link to="/noticias" className={styles.link}><FiFileText /> Noticias</Link>
          <Link to="/informacion" className={styles.link}><FiFileText /> Info</Link>
          <Link to="/equipo" className={styles.link}><FiUsers /> Equipo</Link>
          <Link to="/contacto" className={styles.link}><FiMail /> Contacto</Link>
          {/* SI HAY USUARIO: MUESTRA HISTORIAL Y CERRAR SESION */}
          {/* SI NO HAY USUARIO: MUESTRA INICIAR SESION Y REGISTRARSE */}
          {user ? (
            <>
              <Link to="/historial" className={styles.link}><FiClock /> Historial</Link>
              <button type="button" className={styles.logoutBtn} onClick={onLogout}>
                <FiLogOut /> Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.link}><FiLogIn /> Iniciar Sesión</Link>
              <Link to="/registro" className={styles.link}><FiUserPlus /> Registrarse</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

// VALIDACION DE PROPS CON PROP-TYPES
Header.propTypes = {
  user: PropTypes.shape({
    nombre: PropTypes.string,
    correo: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
}
