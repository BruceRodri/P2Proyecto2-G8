import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { CalculatorForm } from './CalculatorForm.jsx'

describe('CalculatorForm', () => {
  it('llama onSubmit con los valores', () => {
    const onSubmit = vi.fn()
    render(<CalculatorForm label="Test" campos={[{ name: 'nums', label: 'Números' }]} onSubmit={onSubmit} />)
    fireEvent.change(screen.getByLabelText('Números'), { target: { value: '1,2,3' } })
    fireEvent.click(screen.getByText('Calcular'))
    expect(onSubmit).toHaveBeenCalledWith({ nums: '1,2,3' })
  })
})
