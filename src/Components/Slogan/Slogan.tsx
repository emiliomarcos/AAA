import technology from '../../Assets/technology.png'
import './Slogan.css'

export default function Slogan() {
  return (
    <div className='slogan-container'>
      <h1 className='header'>Maneja tu negocio en el <span className='header-pop'>futuro.</span></h1>
      <img className='technology' src={technology} alt='Futuro de tecnología'/>
    </div>
  )
}
