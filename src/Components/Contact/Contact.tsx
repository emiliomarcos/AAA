import { useForm } from '@formspree/react'
import './Contact.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('moqodlba');
  if (state.succeeded) {
    return <h3 className='contact-success'>Gracias por tu interés. Nos pondremos en contacto a la brevedad.</h3>
  }
  return (
    <>
      <h2 className='header'>Compartirnos <span className='header-pop'>tus necesidades</span> es el primer paso.</h2>
      <div className='contact-form-container'>
        <form onSubmit={handleSubmit}>
          <h3 className='contact-title'>Contacto</h3>
          <div className='contact-form'>
            <input name='nombre' type='text' placeholder='Nombre'></input>
            <input name='correo' type='email' placeholder='Correo'></input>
            <input name='telefono' type='text' placeholder='Teléfono'></input>
            <textarea name="mensaje" rows={5} placeholder='Cuéntanos sobre tu empresa' />
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </>
  )
}
