import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faPeopleGroup, faUsersGear, faStopwatch, faRobot, faShield } from '@fortawesome/free-solid-svg-icons'
import './Solutions.css'

export default function Solutions() {
  const solutionsData = [{title: 'Onboarding de clientes', info: 'Reducimos el tiempo de incorporación de tus clientes con herramientas flexibles que aprenden de forma independiente.', icon: faUsers},
    {title: 'Onboarding de empleados', info: 'Aceleramos la integración de nuevos empleados, minimizando errores y dándole prioridad a la productividad.', icon: faPeopleGroup},
    {title: 'Servicio al cliente', info: 'Despreocúpate de problemas frecuentes con herramientas entrenadas para ayudar diréctamente a tus clientes.', icon: faUsersGear},
    {title: 'Chatbots y automatizaciones', info: 'Aumentamos tus ventas y eficiencia con soluciones de IA y automatización disponibles 24/7 en diferentes canales.', icon: faRobot},
    {title: 'Seguridad', info: 'Protegemos tus datos utilizando herramientas de alta seguridad para gestionar la información y asegurando la confidencialidad.', icon: faShield},
    {title: 'Eficiencia', info: 'Nuestras soluciones aumentan la productividad y eficiencia operativa, permitiéndote centrarte en lo más importante.', icon: faStopwatch}]

  const solutions = solutionsData.map(solution =>
    <div className='solution'>
      <FontAwesomeIcon className='solution-icon' icon={solution.icon} size='xl'/>
      <h5 className='solution-title'>{solution.title}</h5>
      <p className='solution-info'>{solution.info}</p>
    </div>
  )


  return (
    <>
      <h2 className='header'>Ofrecemos <span className='header-pop'>soluciones</span> a tu medida.</h2>
      <div className='solutions-container'>
        {solutions}
      </div>
    </>
  )
}
