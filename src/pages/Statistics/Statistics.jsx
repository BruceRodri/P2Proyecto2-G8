// PAGINA DE ESTADISTICA - CALCULA MEDIA, MEDIANA, MODA, VARIANZA, DESVIACION Y RANGO
// USA LAS FUNCIONES DE utils/statistics.js PARA LOS CALCULOS DEL LADO DEL CLIENTE
import { useState } from 'react'
import { FiBarChart2 } from 'react-icons/fi'
import { calculateAllStatistics } from '../../utils/statistics.js'
import { CalculatorForm } from '../../components/CalculatorForm/CalculatorForm.jsx'
import { ResultCard } from '../../components/ResultCard/ResultCard.jsx'
import { saveCalculation } from '../../services/historyService.js'
import { getCurrentUser } from '../../services/authService.js'
import styles from './Statistics.module.css'

export function Statistics() {
  const [results, setResults] = useState(null)
  const [numerosRaw, setNumerosRaw] = useState('')

  function handleSubmit(values) {
    // CONVIERTE EL STRING DE NUMEROS SEPARADOS POR COMA EN UN ARREGLO
    const nums = values.numeros.split(',').map(s => s.trim()).filter(Boolean).map(Number)
    setNumerosRaw(values.numeros)
    if (nums.length === 0) return
    // CALCULA TODAS LAS MEDIDAS ESTADISTICAS USANDO LA UTILERIA
    const stats = calculateAllStatistics(nums)
    setResults(stats)

    // SI EL USUARIO ESTA LOGUEADO, GUARDA EL CALCULO EN EL HISTORIAL
    const user = getCurrentUser()
    if (user) {
      const resultado = `Media: ${stats.media.toFixed(2)}, Mediana: ${stats.mediana.toFixed(2)}, Moda: ${stats.moda.length ? stats.moda.join(', ') : 'No hay moda'}, Varianza: ${stats.varianza.toFixed(2)}, Desviación Estándar: ${stats.desviacionEstandar.toFixed(2)}, Rango: ${stats.rango.toFixed(2)}`
      saveCalculation(user.id, 'Estadística', values.numeros, resultado).catch(console.error)
    }
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}><FiBarChart2 /> Estadística</h1>
      <p className={styles.desc}>
        Ingresa una lista de números separados por coma para calcular las medidas estadísticas.
      </p>
      <div className={styles.grid}>
        <div>
          <CalculatorForm
            label="Ingresa los números"
            campos={[{ name: 'numeros', label: 'Números', placeholder: '10, 15, 20, 25, 30' }]}
            onSubmit={handleSubmit}
          />
          {numerosRaw && (
            <p className={styles.inputDisplay}>
              Datos ingresados: <strong>{numerosRaw}</strong>
            </p>
          )}
        </div>
        {/* MUESTRA LOS RESULTADOS USANDO EL COMPONENTE REUTILIZABLE ResultCard */}
        {results && (
          <div className={styles.results}>
            <h2 className={styles.resultsTitle}>Resultados</h2>
            <ResultCard label="Media" valor={results.media.toFixed(2)} />
            <ResultCard label="Mediana" valor={results.mediana.toFixed(2)} />
            <ResultCard label="Moda" valor={results.moda.length ? results.moda.join(', ') : 'No hay moda'} />
            <ResultCard label="Varianza" valor={results.varianza.toFixed(2)} />
            <ResultCard label="Desviación Estándar" valor={results.desviacionEstandar.toFixed(2)} />
            <ResultCard label="Rango" valor={results.rango.toFixed(2)} />
          </div>
        )}
      </div>
    </div>
  )
}
