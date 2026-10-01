import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { company } from '../../config/company'
import { navigationLinks } from '../../data/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navegación principal">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio">
          <span className="brand-mark">R</span>
          <span>
            <strong>{company.brandName}</strong>
            <small>Soluciones Informáticas</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-menu ${isOpen ? 'is-open' : ''}`}>
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary nav-cta" href="#contacto" onClick={closeMenu}>
            Solicitar cotización
          </a>
        </div>
      </nav>
    </header>
  )
}
