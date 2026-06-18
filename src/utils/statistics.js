// CALCULA EL PROMEDIO: SUMA TODOS LOS VALORES Y DIVIDE ENTRE LA CANTIDAD
export function calcMedia(numeros) {
  const suma = numeros.reduce((acc, n) => acc + n, 0)
  return suma / numeros.length
}

// CALCULA LA MEDIANA: VALOR CENTRAL DEL CONJUNTO ORDENADO
export function calcMediana(numeros) {
  const sorted = [...numeros].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2
  }
  return sorted[mid]
}

// CALCULA LA MODA: VALOR QUE MAS SE REPITE (PUEDE HABER VARIAS O NINGUNA)
export function calcModa(numeros) {
  const freq = {}
  numeros.forEach(n => {
    freq[n] = (freq[n] || 0) + 1
  })
  const maxFreq = Math.max(...Object.values(freq))
  const modas = Object.keys(freq).filter(k => freq[k] === maxFreq).map(Number)
  return modas.length === numeros.length ? [] : modas
}

// CALCULA LA VARIANZA: PROMEDIO DE LAS DIFERENCIAS AL CUADRADO RESPECTO A LA MEDIA
export function calcVarianza(numeros) {
  const media = calcMedia(numeros)
  const suma = numeros.reduce((acc, n) => acc + (n - media) ** 2, 0)
  return suma / numeros.length
}

// CALCULA LA DESVIACION ESTANDAR: RAIZ CUADRADA DE LA VARIANZA
export function calcDesviacionEstandar(numeros) {
  return Math.sqrt(calcVarianza(numeros))
}

// CALCULA EL RANGO: DIFERENCIA ENTRE EL VALOR MAXIMO Y EL MINIMO
export function calcRango(numeros) {
  return Math.max(...numeros) - Math.min(...numeros)
}

// FUNCION PRINCIPAL QUE EJECUTA TODOS LOS CALCULOS ESTADISTICOS Y LOS DEVUELVE EN UN SOLO OBJETO
export function calculateAllStatistics(numeros) {
  const nums = numeros.map(Number)
  return {
    media: calcMedia(nums),
    mediana: calcMediana(nums),
    moda: calcModa(nums),
    varianza: calcVarianza(nums),
    desviacionEstandar: calcDesviacionEstandar(nums),
    rango: calcRango(nums),
  }
}
