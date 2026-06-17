import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Statistics } from './Statistics.jsx'

describe('Statistics', () => {
  it('calcula estadisticas al enviar numeros', () => {
    render(<Statistics />)
    fireEvent.change(screen.getByLabelText('Números'), { target: { value: '10, 20, 30' } })
    fireEvent.click(screen.getByText('Calcular'))
    expect(screen.getAllByText('20.00').length).toBeGreaterThan(0)
  })
})
