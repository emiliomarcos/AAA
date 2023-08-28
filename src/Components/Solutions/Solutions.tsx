import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faPeopleGroup, faUsersGear, faCalendarDays, faRobot, faShield } from '@fortawesome/free-solid-svg-icons'
import './Solutions.css'

export default function Solutions() {
  const solutionsData = [{title: 'Onboarding de clientes', info: 'Clientes clientes clientes clientes clientes clientes clientes clientes clientes', icon: faUsers},
    {title: 'Onboarding de empleados', info: 'Empleados empleados empleados empleados empleados empleados empleados empleados empleados', icon: faPeopleGroup},
    {title: 'Servicio al cliente', info: 'Servicio servicio servicio servicio servicio servicio servicio servicio servicio', icon: faUsersGear},
    {title: 'Chatbots y automatizaciones', info: 'Chatbots chatbots chatbots chatbots chatbots chatbots chatbots chatbots chatbots', icon: faRobot},
    {title: 'Seguridad', info: 'Seguridad seguridad seguridad seguridad seguridad seguridad seguridad seguridad seguridad', icon: faShield},
    {title: 'Eficiencia', info: 'Eficiencia eficiencia eficiencia eficiencia eficiencia eficiencia eficiencia eficiencia eficiencia', icon: faCalendarDays}]

  const solutions = solutionsData.map(solution =>
      <div className='solution'>
        <FontAwesomeIcon className='solution-icon' icon={solution.icon} size='xl'/>
        <h5>{solution.title}</h5>
        <p className='solution-info'>{solution.info}</p>
      </div>
    )


  return (
    <>
      <h2 className='header'><span className='header-pop'>Soluciones</span> a tu medida.</h2>
      <div className='solutions-container'>
        {solutions}
      </div>
    </>
  )
}
