import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Layout } from './components/Layout/Layout.jsx'
import { Home, Login, Register, Statistics, Probability, History, News, Info, Team, Contact } from './pages/index.jsx'
import { getCurrentUser, logoutUser } from './services/authService.js'

function App() {
  const [user, setUser] = useState(getCurrentUser())
  const navigate = useNavigate()

  function handleLogout() {
    logoutUser()
    setUser(null)
    navigate('/')
  }

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
