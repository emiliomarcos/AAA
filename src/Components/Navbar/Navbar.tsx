import { Link } from 'react-router-dom'
import logo from '../../Assets/navbar_logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="navbar-title"><img className='navbar-logo' src={logo} alt='logo' /></Link>
      <div className='navbar-links'>
        <Link to="/">Soluciones</Link>
        <Link to="/acercade">Acerca de</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <Link to="/contacto" className='navbar-demo'>Agenda un demo</Link>
      <button className='navbar-menu'>Opciones</button>
    </nav>
  )
}
