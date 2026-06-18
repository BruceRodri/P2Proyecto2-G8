// PUNTO DE ENTRADA DE LA APLICACION
// IMPORTA REACT, EL ENRUTADOR Y EL COMPONENTE PRINCIPAL
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// RENDERIZA LA APP DENTRO DE BROWSERROUTER PARA HABILITAR LAS RUTAS
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
