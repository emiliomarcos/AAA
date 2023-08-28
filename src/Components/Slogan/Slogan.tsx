import technology from '../../Assets/technology.png'
import './Slogan.css'

export default function Slogan() {
  return (
    <>
      <h1 className='slogan'>Maneja tu negocio en el <span className='futuro'>futuro.</span></h1>
      <img className='technology' src={technology} alt='Futuro de tecnología'/>
    </>
  )
}
