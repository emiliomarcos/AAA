import { Solutions, Navbar, ContactForm } from './Components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <h1 className='slogan'>Maneja tu negocio <span className='futuro'>en el futuro.</span></h1>
      <ContactForm />
      <Routes>
        <Route path='/' element={Solutions} />
      </Routes>
    </BrowserRouter>
  )
}
