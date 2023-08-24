import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSitemap } from '@fortawesome/free-solid-svg-icons'
import './About.css'

export default function About() {
  return (
    <div className='about'>
      <h3>Transformamos tus procesos de ventas con nuestra integración de IA y automatización, reduciendo ineficiencias y potenciando tus resultados.</h3>
      <h5>Nos enfocamos en entender las necesidades de tu negocio para poder ofrecerte las mejores soluciones a la medida.</h5>
      <FontAwesomeIcon icon={faSitemap} size='xl'/>
    </div>
  )
}
