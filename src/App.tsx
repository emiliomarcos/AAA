import { Navbar, Solutions, About, ContactForm } from './Components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Solutions />} />
        <Route path='/acercade' element={<About />} />
        <Route path='/contacto' element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  )
}
