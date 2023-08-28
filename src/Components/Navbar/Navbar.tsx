import logo from '../../Assets/logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <img className='navbar-logo' src={logo} alt='Autonomatico logo' />
      <button className='navbar-demo'>Agenda un Demo</button>
    </nav>
  )
}
