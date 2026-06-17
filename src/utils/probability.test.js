import { describe, it, expect } from 'vitest'
import { calcPermutacion, calcCombinacion, calcProbabilidadSimple } from './probability.js'

describe('calcPermutacion', () => {
  it('calcula P(5, 2) = 20', () => {
    expect(calcPermutacion(5, 2)).toBe(20)
  })
  it('calcula P(3, 3) = 6', () => {
    expect(calcPermutacion(3, 3)).toBe(6)
  })
})

describe('calcCombinacion', () => {
  it('calcula C(5, 2) = 10', () => {
    expect(calcCombinacion(5, 2)).toBe(10)
  })
  it('calcula C(3, 2) = 3', () => {
    expect(calcCombinacion(3, 2)).toBe(3)
  })
})

describe('calcProbabilidadSimple', () => {
  it('calcula 3/10 = 0.3', () => {
    expect(calcProbabilidadSimple(3, 10)).toBe(0.3)
  })
  it('retorna 0 si posibles es 0', () => {
    expect(calcProbabilidadSimple(3, 0)).toBe(0)
  })
})
