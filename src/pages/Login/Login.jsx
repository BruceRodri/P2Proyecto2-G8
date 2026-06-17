import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { loginUser, setCurrentUser } from '../../services/authService.js'
import styles from './Login.module.css'

export function Login({ onLogin }) {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const correo = formData.get('correo')
    const contraseña = formData.get('contraseña')
    try {
      const user = await loginUser(correo, contraseña)
      setCurrentUser(user)
      onLogin(user)
      navigate('/')
    } catch {
      setError('Credenciales inválidas')
    }
  }

  return (
    <div className={styles.login}>
      <h1 className={styles.title}><FiLogIn /> Iniciar Sesión</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.field}>
          <label htmlFor="correo" className={styles.label}>Correo electrónico</label>
          <input type="email" name="correo" id="correo" className={styles.input} required />
        </div>
        <div className={styles.field}>
          <label htmlFor="contraseña" className={styles.label}>Contraseña</label>
          <input type="password" name="contraseña" id="contraseña" className={styles.input} required />
        </div>
        <button type="submit" className={styles.button}>Ingresar</button>
        <p className={styles.registerLink}>
          ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  )
}
