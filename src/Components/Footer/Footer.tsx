import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <p className='footer-email'>autonomaticomx@gmail.com</p>
      <div className="social-links">
        <a className="social-icon" href="https://www.linkedin.com/company/autonomatico" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a className="social-icon" href="https://twitter.com/autonomatico" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
        <a className="social-icon" href="https://instagram.com/autonomaticomx/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
    </footer>
  )
}
