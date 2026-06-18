// TARJETA GENERICA PARA MOSTRAR UN RESULTADO - RECIBE UNA ETIQUETA Y UN VALOR
import PropTypes from 'prop-types'
import styles from './ResultCard.module.css'

export function ResultCard({ label, valor }) {
  return (
    <div className={styles.card}>
      <span className={styles.label}>{label}</span>
      <span className={styles.valor}>{valor}</span>
    </div>
  )
}

ResultCard.propTypes = {
  label: PropTypes.string.isRequired,
  valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}
