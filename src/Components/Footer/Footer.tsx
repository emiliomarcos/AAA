import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a className="social-icon" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a className="social-icon" href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
        <a className="social-icon" href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
    </footer>
  )
}
