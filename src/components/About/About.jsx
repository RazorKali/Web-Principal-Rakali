import { Handshake, Layers3, SlidersHorizontal } from 'lucide-react'

const pillars = [
  {
    title: 'Soluciones personalizadas',
    text: 'Nos adaptamos a las necesidades y procesos de cada organización.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Acompañamiento',
    text: 'Apoyamos al cliente durante la implementación y posteriormente mediante soporte.',
    icon: Handshake,
  },
  {
    title: 'Escalabilidad',
    text: 'Diseñamos soluciones preparadas para crecer junto con el negocio.',
    icon: Layers3,
  },
]

export default function About() {
  return (
    <section className="section about" id="nosotros">
      <div className="container split-section">
        <div>
          <span className="section-kicker">Sobre Rakali</span>
          <h2>Tecnología pensada para tu empresa</h2>
          <p>
            Rakali Soluciones Informáticas nace con el objetivo de ayudar a empresas y
            emprendimientos a implementar soluciones tecnológicas modernas, eficientes y adaptadas
            a sus necesidades.
          </p>
          <p>
            No buscamos solamente entregar software o instalar equipamiento. Buscamos comprender
            los procesos de nuestros clientes y entregar soluciones que puedan crecer junto con
            ellos.
          </p>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article className="mini-card" key={pillar.title}>
                <Icon size={24} />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
