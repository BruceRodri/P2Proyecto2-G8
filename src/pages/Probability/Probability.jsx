import { useState } from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import { calcPermutacion, calcCombinacion, calcProbabilidadSimple } from '../../utils/probability.js'
import { CalculatorForm } from '../../components/CalculatorForm/CalculatorForm.jsx'
import { ResultCard } from '../../components/ResultCard/ResultCard.jsx'
import styles from './Probability.module.css'

export function Probability() {
  const [permResult, setPermResult] = useState(null)
  const [combResult, setCombResult] = useState(null)
  const [probResult, setProbResult] = useState(null)

  function handlePerm(values) {
    const n = Number(values.n)
    const r = Number(values.r)
    setPermResult({ n, r, resultado: calcPermutacion(n, r) })
  }

  function handleComb(values) {
    const n = Number(values.n)
    const r = Number(values.r)
    setCombResult({ n, r, resultado: calcCombinacion(n, r) })
  }

  function handleProb(values) {
    const f = Number(values.favorables)
    const p = Number(values.posibles)
    const r = calcProbabilidadSimple(f, p)
    setProbResult({ f, p, resultado: r, porcentaje: r * 100 })
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}><FiTrendingUp /> Probabilidad</h1>

      <div className={styles.grid}>
        <div>
          <CalculatorForm
            label="Permutación P(n, r)"
            campos={[
              { name: 'n', label: 'n (total)', type: 'number', placeholder: '5' },
              { name: 'r', label: 'r (selección)', type: 'number', placeholder: '2' },
            ]}
            onSubmit={handlePerm}
          />
          {permResult && (
            <ResultCard
              label={`P(${permResult.n}, ${permResult.r})`}
              valor={permResult.resultado}
            />
          )}
        </div>

        <div>
          <CalculatorForm
            label="Combinación C(n, r)"
            campos={[
              { name: 'n', label: 'n (total)', type: 'number', placeholder: '5' },
              { name: 'r', label: 'r (selección)', type: 'number', placeholder: '2' },
            ]}
            onSubmit={handleComb}
          />
          {combResult && (
            <ResultCard
              label={`C(${combResult.n}, ${combResult.r})`}
              valor={combResult.resultado}
            />
          )}
        </div>

        <div>
          <CalculatorForm
            label="Probabilidad Simple"
            campos={[
              { name: 'favorables', label: 'Eventos favorables', type: 'number', placeholder: '3' },
              { name: 'posibles', label: 'Eventos posibles', type: 'number', placeholder: '10' },
            ]}
            onSubmit={handleProb}
          />
          {probResult && (
            <ResultCard
              label={`P = ${probResult.resultado.toFixed(4)}`}
              valor={`${probResult.porcentaje.toFixed(1)}%`}
            />
          )}
        </div>
      </div>
    </div>
  )
}
