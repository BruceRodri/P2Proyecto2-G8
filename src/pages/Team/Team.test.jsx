import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Team } from './Team.jsx'

describe('Team', () => {
  it('renderiza miembros del equipo', () => {
    render(<Team />)
    expect(screen.getByText('Equipo de Trabajo')).toBeInTheDocument()
  })
})
