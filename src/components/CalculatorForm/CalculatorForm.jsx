// USA FormData PARA EXTRAER VALORES SIN NECESIDAD DE useState EN CADA CAMPO
import PropTypes from 'prop-types'
import styles from './CalculatorForm.module.css'

export function CalculatorForm({ label, campos, onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault()
    // EXTRAE TODOS LOS VALORES DEL FORMULARIO USANDO FormData
    const formData = new FormData(e.target)
    const values = {}
    campos.forEach(c => {
      values[c.name] = formData.get(c.name)
    })
    onSubmit(values)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.label}>{label}</h3>
      {/* RECORRE EL ARREGLO DE CAMPOS Y CREA UN INPUT POR CADA UNO */}
      {campos.map(c => (
        <div key={c.name} className={styles.field}>
          <label className={styles.fieldLabel} htmlFor={c.name}>{c.label}</label>
          <input
            type={c.type || 'text'}
            name={c.name}
            id={c.name}
            className={styles.input}
            placeholder={c.placeholder}
            required={c.required !== false}
          />
        </div>
      ))}
      <button type="submit" className={styles.button}>Calcular</button>
    </form>
  )
}

CalculatorForm.propTypes = {
  label: PropTypes.string.isRequired,
  campos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
  })).isRequired,
  onSubmit: PropTypes.func.isRequired,
}
