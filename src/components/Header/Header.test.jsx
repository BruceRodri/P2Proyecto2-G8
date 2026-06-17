import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import { Header } from './Header.jsx'

describe('Header', () => {
  it('muestra enlaces basicos', () => {
    render(<MemoryRouter><Header user={null} onLogout={vi.fn()} /></MemoryRouter>)
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText('Estadística')).toBeInTheDocument()
  })

  it('muestra boton de cerrar sesion cuando hay usuario', () => {
    render(<MemoryRouter><Header user={{ nombre: 'Bruce' }} onLogout={vi.fn()} /></MemoryRouter>)
    expect(screen.getByText('Cerrar Sesión')).toBeInTheDocument()
  })
})
