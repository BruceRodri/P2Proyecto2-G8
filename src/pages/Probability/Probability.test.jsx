import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Probability } from './Probability.jsx'

describe('Probability', () => {
  it('calcula permutacion P(5,2)=20', () => {
    render(<Probability />)
    const nInputs = screen.getAllByLabelText('n (total)')
    const rInputs = screen.getAllByLabelText('r (selección)')
    fireEvent.change(nInputs[0], { target: { value: '5' } })
    fireEvent.change(rInputs[0], { target: { value: '2' } })
    fireEvent.click(screen.getAllByText('Calcular')[0])
    expect(screen.getByText('20')).toBeInTheDocument()
  })
})
