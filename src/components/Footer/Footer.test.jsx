import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer.jsx'

describe('Footer', () => {
  it('muestra copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/MathStats/)).toBeInTheDocument()
  })
})
