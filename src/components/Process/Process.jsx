import React from 'react'
import { processSteps } from '../../data/process'

export default function Process() {
  return (
    <section className="section process" id="proceso">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Proceso de trabajo</span>
          <h2>De la necesidad a una solución funcionando</h2>
          <p>Un proceso claro ayuda a definir alcance, controlar tiempos y validar resultados.</p>
        </div>
        <div className="timeline">
          {processSteps.map((step) => (
            <article className="timeline-item" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
