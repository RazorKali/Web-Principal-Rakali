import { ArrowRight, Boxes, Code2, Network, Server } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-scene" aria-hidden="true">
        <div className="scene-grid" />
        <div className="scene-node node-one" />
        <div className="scene-node node-two" />
        <div className="scene-node node-three" />
        <div className="scene-panel scene-panel-main">
          <span>Infraestructura activa</span>
          <strong>99.9%</strong>
          <small>monitoreo y soporte</small>
        </div>
        <div className="scene-panel scene-panel-side">
          <span>API</span>
          <strong>Integraciones</strong>
          <small>software + datos</small>
        </div>
      </div>

      <div className="container hero-content">
        <div className="eyebrow">Desarrollo, redes, infraestructura y soporte TI</div>
        <h1>Tecnología que impulsa tu negocio</h1>
        <p className="hero-lead">
          En Rakali Soluciones Informáticas desarrollamos e implementamos soluciones
          tecnológicas adaptadas a las necesidades de cada empresa.
        </p>
        <p className="hero-copy">
          Desarrollo de software, redes, infraestructura, soporte y soluciones TI en un solo
          lugar.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#servicios">
            Conoce nuestros servicios <ArrowRight size={18} />
          </a>
          <a className="btn btn-secondary" href="#contacto">
            Solicitar cotización
          </a>
        </div>
        <div className="hero-metrics" aria-label="Áreas de servicio">
          <span>
            <Code2 size={18} /> Software
          </span>
          <span>
            <Network size={18} /> Redes
          </span>
          <span>
            <Server size={18} /> Servidores
          </span>
          <span>
            <Boxes size={18} /> Inventario
          </span>
        </div>
      </div>
    </section>
  )
}
