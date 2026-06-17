import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ResultCard } from './ResultCard.jsx'

describe('ResultCard', () => {
  it('renderiza label y valor', () => {
    render(<ResultCard label="Media" valor={15.5} />)
    expect(screen.getByText('Media')).toBeInTheDocument()
    expect(screen.getByText('15.5')).toBeInTheDocument()
  })
})
