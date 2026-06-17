import { useState } from 'react'
import { FiBarChart2 } from 'react-icons/fi'
import { calculateAllStatistics } from '../../utils/statistics.js'
import { CalculatorForm } from '../../components/CalculatorForm/CalculatorForm.jsx'
import { ResultCard } from '../../components/ResultCard/ResultCard.jsx'
import styles from './Statistics.module.css'

export function Statistics() {
  const [results, setResults] = useState(null)
  const [numerosRaw, setNumerosRaw] = useState('')

  function handleSubmit(values) {
    const nums = values.numeros.split(',').map(s => s.trim()).filter(Boolean).map(Number)
    setNumerosRaw(values.numeros)
    if (nums.length === 0) return
    const stats = calculateAllStatistics(nums)
    setResults(stats)
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
