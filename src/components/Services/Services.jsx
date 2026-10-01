import React from 'react'
import { Check } from 'lucide-react'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Servicios</span>
          <h2>Servicios tecnológicos para operar con más claridad</h2>
          <p>
            Integramos software, infraestructura y soporte para que la tecnología acompañe el
            crecimiento de tu empresa.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={26} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>
                      <Check size={16} /> {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
