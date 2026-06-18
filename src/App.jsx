// COMPONENTE PRINCIPAL - MANEJA EL ESTADO DEL USUARIO Y LAS RUTAS
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Layout } from './components/Layout/Layout.jsx'
import { Home, Login, Register, Statistics, Probability, History, News, Info, Team, Contact } from './pages/index.jsx'
import { getCurrentUser, logoutUser } from './services/authService.js'

function App() {
  // ESTADO DEL USUARIO: AL INICIAR LEE DE LOCALSTORAGE SI HAY SESION ACTIVA
  const [user, setUser] = useState(getCurrentUser())
  const navigate = useNavigate()

  // CIERRA SESION: LIMPIA LOCALSTORAGE Y REDIRIGE AL INICIO
  function handleLogout() {
    logoutUser()
    setUser(null)
    navigate('/')
  }

  // ACTUALIZA EL ESTADO CUANDO EL USUARIO INICIA SESION O SE REGISTRA
  function handleLogin(userData) {
    setUser(userData)
  }

  return (
    <Layout user={user} onLogout={handleLogout}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/registro" element={<Register onLogin={handleLogin} />} />
        <Route path="/estadistica" element={<Statistics />} />
        <Route path="/probabilidad" element={<Probability />} />
        <Route path="/historial" element={<History />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/informacion" element={<Info />} />
        <Route path="/equipo" element={<Team />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
