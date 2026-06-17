import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { Home } from './Home.jsx'

describe('Home', () => {
  it('renderiza titulo y tarjetas', () => {
    render(<MemoryRouter><Home /></MemoryRouter>)
    expect(screen.getByText('MathStats')).toBeInTheDocument()
    expect(screen.getByText('Estadística')).toBeInTheDocument()
    expect(screen.getByText('Probabilidad')).toBeInTheDocument()
  })
})
