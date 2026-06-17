import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FiUserPlus } from 'react-icons/fi'
import { registerUser, setCurrentUser } from '../../services/authService.js'
import styles from './Register.module.css'

export function Register({ onLogin }) {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const nombre = formData.get('nombre')
    const correo = formData.get('correo')
    const contraseña = formData.get('contraseña')
    try {
      const user = await registerUser(nombre, correo, contraseña)
      setCurrentUser(user)
      onLogin(user)
      navigate('/')
    } catch {
      setError('Error al registrar usuario')
    }
  }

  return (
    <div className={styles.register}>
      <h1 className={styles.title}><FiUserPlus /> Registrarse</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.field}>
          <label htmlFor="nombre" className={styles.label}>Nombre completo</label>
          <input type="text" name="nombre" id="nombre" className={styles.input} required />
        </div>
        <div className={styles.field}>
          <label htmlFor="correo" className={styles.label}>Correo electrónico</label>
          <input type="email" name="correo" id="correo" className={styles.input} required />
        </div>
        <div className={styles.field}>
          <label htmlFor="contraseña" className={styles.label}>Contraseña</label>
          <input type="password" name="contraseña" id="contraseña" className={styles.input} required />
        </div>
        <button type="submit" className={styles.button}>Registrarse</button>
        <p className={styles.loginLink}>
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </form>
    </div>
  )
}
