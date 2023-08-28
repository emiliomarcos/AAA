import { Navbar, Slogan, Solutions, About, Contact, Footer } from './Components'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {

  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Solutions />} />
    //     <Route path='/acercade' element={<About />} />
    //     <Route path='/contacto' element={<ContactForm />} />
    //     <Route path='/chatbot' element={<ContactForm />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <>
      <Navbar />
      <Slogan />
      <Solutions />
      <br></br>
      <About />
      <br></br>
      <Contact />
      <br></br>
      <Footer />
    </>
  )
}
