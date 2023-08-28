import { useForm } from '@formspree/react'
import './Contact.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('moqodlba');
  if (state.succeeded) {
    return <p>Gracias por tu interés. Nos pondremos en contacto a la brevedad.</p>
  }
  return (
    <div className='contact-form-container'>
      <h3>Contacto</h3>
      <form  onSubmit={handleSubmit}>
        <div className='contact-form'>
          <input type='text' placeholder='Nombre' name='nombre'></input>
          <input type='email' placeholder='Correo' name='correo'></input>
          <input type='text' placeholder='Teléfono' name='telefono'></input>
          {/* <input type='text' placeholder='Mensaje' name='mensaje'></input> */}
          <textarea name="mensaje" rows={5} placeholder="Cuéntanos sobre tu empresa" />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  )
}
