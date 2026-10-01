import React from 'react'
import { ArrowRight, BarChart3, CheckCircle2, MonitorSmartphone } from 'lucide-react'
import { inventoryFeatures } from '../../data/services'

export default function Inventory() {
  return (
    <section className="section inventory" id="inventory">
      <div className="container inventory-layout">
        <div className="inventory-copy">
          <span className="section-kicker">Sistema de inventario</span>
          <h2>Rakali Inventory</h2>
          <p className="section-subtitle">Controla tu inventario desde cualquier lugar.</p>
          <p>
            Sistema diseñado para centralizar la administración de productos, movimientos y
            existencias de una empresa.
          </p>
          <div className="inventory-actions">
            <a className="btn btn-primary" href="#contacto">
              Conocer el sistema <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="#contacto">
              Solicitar demostración
            </a>
          </div>
        </div>
        <div className="product-showcase" aria-label="Vista preparada para capturas del sistema">
          <div className="showcase-topbar">
            <span />
            <span />
            <span />
          </div>
          <div className="showcase-content">
            <div className="dashboard-card accent">
              <BarChart3 size={22} />
              <strong>Dashboard</strong>
              <small>ventas, stock y movimientos</small>
            </div>
            <div className="dashboard-card">
              <MonitorSmartphone size={22} />
              <strong>Acceso responsive</strong>
              <small>computador, tablet y móvil</small>
            </div>
            <div className="stock-table">
              <span>Producto</span>
              <span>Stock</span>
              <span>Estado</span>
              <strong>Insumos</strong>
              <strong>128</strong>
              <em>Activo</em>
              <strong>Ventas</strong>
              <strong>32</strong>
              <em>Hoy</em>
            </div>
          </div>
        </div>
        <div className="feature-list">
          {inventoryFeatures.map((feature) => (
            <span key={feature}>
              <CheckCircle2 size={18} /> {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
