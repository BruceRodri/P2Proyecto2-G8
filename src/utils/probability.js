export function calcPermutacion(n, r) {
  let result = 1
  for (let i = n; i > n - r; i--) {
    result *= i
  }
  return result
}

export function calcCombinacion(n, r) {
  let num = 1
  for (let i = n; i > n - r; i--) {
    num *= i
  }
  let den = 1
  for (let i = 1; i <= r; i++) {
    den *= i
  }
  return num / den
}

export function calcProbabilidadSimple(favorables, posibles) {
  if (posibles === 0) return 0
  return favorables / posibles
}
