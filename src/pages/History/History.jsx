import { useState, useEffect } from 'react'
import { FiClock } from 'react-icons/fi'
import { getHistory } from '../../services/historyService.js'
import { getCurrentUser } from '../../services/authService.js'
import styles from './History.module.css'

export function History() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const user = getCurrentUser()

  // useEffect CARGA EL HISTORIAL AL MONTAR EL COMPONENTE O CUANDO CAMBIA EL USUARIO
  useEffect(() => {
    async function load() {
      if (!user) {
        setLoading(false)
        return
      }
      try {
        const data = await getHistory(user.id)
        setHistory(data)
      } catch {
        setHistory([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [user])

  if (!user) {
    return (
      <div className={styles.page}>
        <h1 className={styles.title}><FiClock /> Historial</h1>
        <p className={styles.empty}>Debes iniciar sesión para ver tu historial.</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className={styles.page}>
        <h1 className={styles.title}><FiClock /> Historial</h1>
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}><FiClock /> Historial de Cálculos</h1>
      {history.length === 0 ? (
        <p className={styles.empty}>No hay cálculos registrados aún.</p>
      ) : (
        // TABLA CON TIPO, DATOS INGRESADOS, RESULTADO Y FECHA DE CADA CALCULO
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Datos Ingresados</th>
                <th>Resultado</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.tipoCalculo}</td>
                  <td>{entry.datosIngresados}</td>
                  <td>{entry.resultado}</td>
                  <td>{new Date(entry.fecha).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
