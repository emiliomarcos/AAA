import logo from '../../Assets/navbar_logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <img className='logo' src={logo} alt='logo' />
      <div className='tabs'>
        <p>Soluciones</p>
        <p>Acerca de</p>
        <p>Contacto</p>
      </div>
      <p className='agenda-demo'>Agenda un demo</p>
    </nav>
  )
}
