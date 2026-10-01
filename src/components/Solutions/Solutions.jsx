import { ArrowRight } from 'lucide-react'
import { softwareHighlights } from '../../data/services'

export default function Solutions() {
  return (
    <section className="section solutions" id="soluciones">
      <div className="container">
        <div className="section-heading narrow">
          <span className="section-kicker">Soluciones de software</span>
          <h2>Nuestras soluciones</h2>
          <p>
            Desarrollamos herramientas diseñadas para resolver necesidades reales de las empresas.
          </p>
        </div>
        <div className="solution-band">
          <div>
            <h3>Productos listos para crecer</h3>
            <p>
              La estructura está preparada para incorporar nuevos sistemas, módulos e integraciones
              conforme Rakali amplíe su catálogo de soluciones.
            </p>
            <a href="#inventory" className="text-link">
              Ver Rakali Inventory <ArrowRight size={17} />
            </a>
          </div>
          <div className="software-grid">
            {softwareHighlights.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.label}>
                  <Icon size={24} />
                  <span>{item.label}</span>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
