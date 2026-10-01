import React from 'react'
import { company } from '../../config/company'
import { navigationLinks } from '../../data/navigation'

const footerServices = ['Desarrollo de software', 'Redes', 'Soporte', 'Servidores', 'Consultoría']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark">R</span>
            <span>
              <strong>RAKALI</strong>
              <small>Soluciones Informáticas</small>
            </span>
          </a>
          <p>Desarrollo, infraestructura y soporte tecnológico para empresas.</p>
        </div>
        <div>
          <h3>Links</h3>
          {navigationLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Servicios</h3>
          {footerServices.map((service) => (
            <a href="#servicios" key={service}>
              {service}
            </a>
          ))}
        </div>
        <div>
          <h3>Contacto</h3>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
          <span>{company.location}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Rakali Soluciones Informáticas.</span>
      </div>
    </footer>
  )
}
