import logo from '../../Assets/navbar_logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <img className='navbar-logo' src={logo} alt='logo' />
      <div className='navbar-links'>
        <p>Soluciones</p>
        <p>Acerca de</p>
        <p>Contacto</p>
      </div>
      <p className='navbar-demo'>Agenda un demo</p>
      <button className='navbar-menu'>Opciones</button>
    </nav>
  )
}
