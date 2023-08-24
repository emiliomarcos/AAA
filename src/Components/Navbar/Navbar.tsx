import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
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
      <Link to="/contacto" className='navbar-demo'><button>Agenda un demo</button></Link>
      <button className='navbar-menu'><FontAwesomeIcon icon={faBars} size='xl'/></button>
    </nav>
  )
}
