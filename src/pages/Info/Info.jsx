import { FiFileText } from 'react-icons/fi'
import styles from './Info.module.css'

export function Info() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}><FiFileText /> Información</h1>

      <section className={styles.section}>
        <h2>Estadística</h2>
        <p>
          La estadística es la ciencia que se ocupa de recolectar, organizar, analizar e interpretar datos
          para obtener conclusiones y tomar decisiones. Se divide en estadística descriptiva (resumir datos)
          e inferencial (hacer predicciones).
        </p>
      </section>

      <section className={styles.section}>
        <h2>Media</h2>
        <p>
          La media aritmética es el promedio de un conjunto de valores. Se calcula sumando todos los valores
          y dividiendo entre el número total de elementos. Es la medida de tendencia central más común.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Mediana</h2>
        <p>
          La mediana es el valor central de un conjunto de datos ordenados. Si la cantidad de datos es impar,
          es el valor del medio. Si es par, es el promedio de los dos valores centrales. Representa el percentil 50.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Moda</h2>
        <p>
          La moda es el valor que aparece con mayor frecuencia en un conjunto de datos. Un conjunto puede tener
          una moda (unimodal), varias modas (multimodal) o ninguna moda si todos los valores son únicos.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Varianza</h2>
        <p>
          La varianza mide la dispersión de los datos respecto a la media. Se calcula como el promedio de las
          diferencias al cuadrado entre cada valor y la media. Una varianza alta indica datos muy dispersos.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Desviación Estándar</h2>
        <p>
          La desviación estándar es la raíz cuadrada de la varianza. Se expresa en las mismas unidades que los
          datos originales, lo que facilita su interpretación. Indica qué tan dispersos están los valores.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Probabilidad</h2>
        <p>
          La probabilidad es una medida numérica de la posibilidad de que ocurra un evento. Su valor oscila
          entre 0 (evento imposible) y 1 (evento seguro). Es fundamental en estadística, ciencia y toma de decisiones.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Probabilidad Simple</h2>
        <p>
          La probabilidad simple de un evento se calcula dividiendo el número de casos favorables entre el
          número total de casos posibles. P(A) = casos favorables / casos posibles.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Permutaciones</h2>
        <p>
          Una permutación es un arreglo ordenado de elementos. P(n, r) = n! / (n - r)!. El orden de los
          elementos importa. Por ejemplo, P(5, 2) = 5! / 3! = 20.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Combinaciones</h2>
        <p>
          Una combinación es una selección de elementos sin importar el orden. C(n, r) = n! / (r! * (n - r)!).
          Por ejemplo, C(5, 2) = 5! / (2! * 3!) = 10.
        </p>
      </section>
    </div>
  )
}
