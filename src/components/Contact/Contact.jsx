import { Mail, MapPin, Phone, Send, Smartphone } from 'lucide-react'
import { useState } from 'react'
import { company, getWhatsAppUrl } from '../../config/company'
import { serviceOptions } from '../../data/contactOptions'

const initialForm = {
  name: '',
  companyName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const validateForm = (form) => {
  const errors = {}

  if (!form.name.trim()) errors.name = 'Ingresa tu nombre.'
  if (!form.email.trim()) {
    errors.email = 'Ingresa tu correo.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Ingresa un correo válido.'
  }
  if (!form.service) errors.service = 'Selecciona un servicio.'
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = 'Cuéntanos un poco más sobre tu necesidad.'
  }

  return errors
}

const submitContactRequest = async () => {
  throw new Error('El formulario aún no tiene una API conectada.')
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setStatus('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validateForm(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setStatus('Revisa los campos marcados antes de continuar.')
      return
    }

    try {
      await submitContactRequest(form)
    } catch {
      setStatus('El formulario está listo, pero falta conectar una API para enviar solicitudes.')
    }
  }

  return (
    <section className="section contact" id="contacto">
      <div className="container contact-layout">
        <div className="contact-copy">
          <span className="section-kicker">Contacto</span>
          <h2>Hablemos de tu proyecto</h2>
          <p>
            ¿Necesitas desarrollar un sistema, mejorar tu infraestructura tecnológica o solucionar
            un problema informático?
          </p>
          <p>
            Cuéntanos qué necesitas y buscaremos una solución adecuada para tu empresa.
          </p>
          <div className="contact-links">
            <a href={`mailto:${company.email}`}>
              <Mail size={19} /> {company.email}
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              <Smartphone size={19} /> WhatsApp
            </a>
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>
              <Phone size={19} /> {company.phone}
            </a>
            <span>
              <MapPin size={19} /> {company.location}
            </span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>
              Nombre
              <input name="name" value={form.name} onChange={updateField} />
              {errors.name && <small>{errors.name}</small>}
            </label>
            <label>
              Empresa
              <input name="companyName" value={form.companyName} onChange={updateField} />
            </label>
          </div>
          <div className="form-row">
            <label>
              Correo electrónico
              <input name="email" type="email" value={form.email} onChange={updateField} />
              {errors.email && <small>{errors.email}</small>}
            </label>
            <label>
              Teléfono
              <input name="phone" value={form.phone} onChange={updateField} />
            </label>
          </div>
          <label>
            Servicio de interés
            <select name="service" value={form.service} onChange={updateField}>
              <option value="">Selecciona una opción</option>
              {serviceOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.service && <small>{errors.service}</small>}
          </label>
          <label>
            Mensaje
            <textarea name="message" rows="5" value={form.message} onChange={updateField} />
            {errors.message && <small>{errors.message}</small>}
          </label>
          {status && <p className="form-status">{status}</p>}
          <button className="btn btn-primary" type="submit">
            <Send size={18} /> Enviar solicitud
          </button>
        </form>
      </div>
    </section>
  )
}
