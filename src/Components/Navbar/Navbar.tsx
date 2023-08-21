import logo from '../../Assets/navbar_logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <img className='logo' src={logo} alt='logo' />
    </nav>
  )
}
