import { useForm } from '@formspree/react'
import './ContactForm.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('moqodlba');
  if (state.succeeded) {
    return <p>Gracias por tu interés. Nos pondremos en contacto a la brevedad.</p>
  }
  return (
    <>
      <h3>Contacto</h3>
      <form className='contact-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Nombre' name='nombre'></input>
        <input type='email' placeholder='Correo' name='correo'></input>
        <input type='text' placeholder='Teléfono' name='telefono'></input>
        <input type='text' placeholder='Mensaje' name='mensaje'></input>
        <br></br>
        <button>Enviar</button>
      </form>
    </>
  )
}
