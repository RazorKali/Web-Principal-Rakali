import React from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Inventory from '../components/Inventory/Inventory'
import Navbar from '../components/Navbar/Navbar'
import Process from '../components/Process/Process'
import Services from '../components/Services/Services'
import Solutions from '../components/Solutions/Solutions'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'
import { whyChooseUs } from '../data/services'

function WhyChooseRakali() {
  return (
    <section className="section why">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Por qué elegir Rakali</span>
          <h2>Un socio tecnológico, no solo un proveedor</h2>
        </div>
        <div className="why-grid">
          {whyChooseUs.map((item) => {
            const Icon = item.icon
            return (
              <article className="mini-card" key={item.title}>
                <Icon size={25} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Inventory />
        <WhyChooseRakali />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
