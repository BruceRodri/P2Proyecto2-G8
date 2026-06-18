// CALCULA UNA PERMUTACION P(N, R) = N! / (N-R)! - EL ORDEN IMPORTA
export function calcPermutacion(n, r) {
  let result = 1
  for (let i = n; i > n - r; i--) {
    result *= i
  }
  return result
}

// CALCULA UNA COMBINACION C(N, R) = N! / (R! * (N-R)!) - EL ORDEN NO IMPORTA
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

// CALCULA LA PROBABILIDAD SIMPLE P = FAVORABLES / POSIBLES
export function calcProbabilidadSimple(favorables, posibles) {
  if (posibles === 0) return 0
  return favorables / posibles
}
