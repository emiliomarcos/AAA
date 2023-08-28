import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faPeopleGroup, faUsersGear, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import './Solutions.css'

export default function Solutions() {
  return (
    <>
      <h3>Automatizaciones y Chatbots</h3>
      <div className='solutions'>
        <div className='solution'>
          <h5>Onboarding de Clientes</h5>
          <FontAwesomeIcon className="solution-icon" icon={faUsers} size='xl'/>
        </div>
        <div className='solution'>
          <h5>Onboarding de Empleados</h5>
          <FontAwesomeIcon className="solution-icon" icon={faPeopleGroup} size='xl'/>
        </div>
        <div className='solution'>
          <h5>Servicio al Cliente</h5>
          <FontAwesomeIcon className="solution-icon" icon={faUsersGear} size='xl'/>
        </div>
        <div className='solution'>
          <h5>Agenda de Citas</h5>
          <FontAwesomeIcon className="solution-icon" icon={faCalendarDays} size='xl'/>
        </div>
      </div>
    </>
  )
}
