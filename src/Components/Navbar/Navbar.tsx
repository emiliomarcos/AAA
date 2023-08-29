import logo from '../../Assets/logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <img className='navbar-logo' src={logo} alt='Autonomatico logo' />
      <a href='https://calendly.com/emiliomarcos/30min' target='_blank' rel='noreferrer'>
        <button className='navbar-demo'>Agenda un Demo</button>
      </a>
    </nav>
  )
}
