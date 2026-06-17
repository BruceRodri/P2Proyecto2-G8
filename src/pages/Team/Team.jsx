import { FiUsers } from 'react-icons/fi'
import styles from './Team.module.css'

const team = [
  {
    nombre: 'Bruce Rodríguez',
    carrera: 'Ingeniería Tecnologías de la Información',
    biografia: 'Bruce Rodríguez es estudiante de Ingeniería en Tecnologías de la Información, con especial interés en el área de la ciberseguridad.',
    foto: 'https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYzFu76zSr6jrM942JI0l4o5RMfcnSL6j1SjIX6PmNQNR-tSKFnRRxJesBwpSiwpmy50JDWqODp_EJDvPeLy9EfAsJYNupaPLnNz.jpg?r=e8b',
  },
  {
    nombre: 'Andrés Ushiña',
    carrera: 'Ingeniería Tecnologías de la Información',
    biografia: 'Hola que tal, Buenas tardes',
    foto: 'https://phantom-marca-mx.unidadeditorial.es/99be392fead427bead400f63d32480cb/resize/828/f/webp/mx/assets/multimedia/imagenes/2024/09/03/17253645500972.jpg',
  },
]

export function Team() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}><FiUsers /> Equipo de Trabajo</h1>
      <p className={styles.desc}>Conoce al equipo detrás de MathStats.</p>
      <div className={styles.grid}>
        {team.map((m) => (
          <article key={m.nombre} className={styles.card}>
            <img src={m.foto} alt={m.nombre} className={styles.foto} />
            <h3 className={styles.nombre}>{m.nombre}</h3>
            <p className={styles.carrera}>{m.carrera}</p>
            <p className={styles.bio}>{m.biografia}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
