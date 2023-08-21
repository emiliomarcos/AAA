import './Form.css'

export default function Form() {
  return (
    <>
      <h3>Contáctanos</h3>
      <form className='contact-form'>
        <input type='text' placeholder='Nombre'></input>
        <input type='text' placeholder='Correo'></input>
        <input type='text' placeholder='Teléfono'></input>
        <input type='text' placeholder='Mensaje'></input>
        <br></br>
        <button>Enviar</button>
      </form>
    </>
  )
}
