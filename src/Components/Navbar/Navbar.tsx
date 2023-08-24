import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from '../../Assets/navbar_logo.png'
import './Navbar.css'

export default function Navbar() {
  function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdown-content')
    if (dropdownContent) {
      if (dropdownContent.style.display === 'none') {
        dropdownContent.style.display = 'flex';
      } else {
        dropdownContent.style.display = 'none';
      }
    }
  }

  function handleResize() {
    const dropdownContent = document.getElementById('dropdown-content')
    if (window.innerWidth > 1100 && dropdownContent) {
      dropdownContent.style.display = 'none';
    }
  }

  return (
    <nav>
      <Link to="/" className="navbar-title"><img className='navbar-logo' src={logo} alt='logo' /></Link>
      <div className='navbar-links'>
        <Link to="/">Soluciones</Link>
        <Link to="/acercade">Acerca de</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <Link to="/contacto" className='navbar-demo'><button>Agenda un demo</button></Link>
      <button className='navbar-menu' onClick={toggleDropdown}><FontAwesomeIcon icon={faBars} size='xl'/></button>
      <div id="dropdown-content">
        <Link to="/">Soluciones</Link>
        <Link to="/acercade">Acerca de</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  )
}
