import { describe, it, expect } from 'vitest'
import { calcMedia, calcMediana, calcModa, calcVarianza, calcDesviacionEstandar, calcRango, calculateAllStatistics } from './statistics.js'

describe('calcMedia', () => {
  it('calcula la media de un arreglo', () => {
    expect(calcMedia([10, 20, 30])).toBe(20)
  })
})

describe('calcMediana', () => {
  it('calcula la mediana con cantidad impar', () => {
    expect(calcMediana([10, 20, 30])).toBe(20)
  })
  it('calcula la mediana con cantidad par', () => {
    expect(calcMediana([10, 20, 30, 40])).toBe(25)
  })
})

describe('calcModa', () => {
  it('retorna la moda cuando existe', () => {
    expect(calcModa([10, 10, 20, 30])).toEqual([10])
  })
  it('retorna arreglo vacio si no hay moda', () => {
    expect(calcModa([10, 20, 30])).toEqual([])
  })
})

describe('calcVarianza', () => {
  it('calcula la varianza', () => {
    const v = calcVarianza([10, 20, 30])
    expect(v).toBeCloseTo(66.67, 1)
  })
})

describe('calcDesviacionEstandar', () => {
  it('calcula la desviacion estandar', () => {
    const d = calcDesviacionEstandar([10, 20, 30])
    expect(d).toBeCloseTo(8.16, 1)
  })
})

describe('calcRango', () => {
  it('calcula el rango', () => {
    expect(calcRango([10, 20, 30])).toBe(20)
  })
})

describe('calculateAllStatistics', () => {
  it('retorna todas las estadisticas', () => {
    const r = calculateAllStatistics([10, 20, 30])
    expect(r.media).toBe(20)
    expect(r.rango).toBe(20)
    expect(r.moda).toEqual([])
  })
})
