import { MessageSquare } from 'lucide-react'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-panel">
        <div>
          <span className="section-kicker">Conversemos</span>
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>
            Desde desarrollar una aplicación hasta implementar la infraestructura tecnológica de tu
            empresa, podemos ayudarte a encontrar una solución.
          </p>
        </div>
        <a className="btn btn-primary" href="#contacto">
          <MessageSquare size={18} /> Conversemos sobre tu proyecto
        </a>
      </div>
    </section>
  )
}
