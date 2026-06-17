export function calcMedia(numeros) {
  const suma = numeros.reduce((acc, n) => acc + n, 0)
  return suma / numeros.length
}

export function calcMediana(numeros) {
  const sorted = [...numeros].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2
  }
  return sorted[mid]
}

export function calcModa(numeros) {
  const freq = {}
  numeros.forEach(n => {
    freq[n] = (freq[n] || 0) + 1
  })
  const maxFreq = Math.max(...Object.values(freq))
  const modas = Object.keys(freq).filter(k => freq[k] === maxFreq).map(Number)
  return modas.length === numeros.length ? [] : modas
}

export function calcVarianza(numeros) {
  const media = calcMedia(numeros)
  const suma = numeros.reduce((acc, n) => acc + (n - media) ** 2, 0)
  return suma / numeros.length
}

export function calcDesviacionEstandar(numeros) {
  return Math.sqrt(calcVarianza(numeros))
}

export function calcRango(numeros) {
  return Math.max(...numeros) - Math.min(...numeros)
}

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
