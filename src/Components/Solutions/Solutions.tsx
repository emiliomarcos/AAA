import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faPeopleGroup, faUsersGear, faStopwatch, faRobot, faShield } from '@fortawesome/free-solid-svg-icons'
import './Solutions.css'

export default function Solutions() {
  const solutionsData = [{title: 'Onboarding de clientes', info: 'Automatiza el onboarding de tus clientes con IA que conoce tus productos y aprende de forma independiente.', icon: faUsers},
    {title: 'Onboarding de empleados', info: 'Automatiza el onboarding de tus empleados con IA que conoce tus procesos y aprende de forma independiente.', icon: faPeopleGroup},
    {title: 'Servicio al cliente', info: 'Despreocúpate de problemas frecuentes con herramientas entrenadas para ayudar diréctamente a tus clientes.', icon: faUsersGear},
    {title: 'Chatbots y automatizaciones', info: 'Maneja tu negocio 24/7 con chatbots y automatizaciones hechos a la medidas de tus necesidades.', icon: faRobot},
    {title: 'Seguridad', info: 'Protegemos la confidencialidad e integridad de tus datos mediante encriptación de nivel empresarial y políticas de seguridad rigurosas.', icon: faShield},
    {title: 'Eficiencia', info: 'Nuestras soluciones aumentan la eficiencia operativa, permitiéndote centrarte en tareas estratégicas mientras las automatizaciones manejan las operaciones diarias.', icon: faStopwatch}]

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
