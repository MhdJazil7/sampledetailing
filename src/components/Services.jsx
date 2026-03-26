import React from 'react'
import { motion } from 'framer-motion'
import { Droplet, Wind, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import washImg from '../assets/wash_service.png'

const services = [
  {
    title: "Basic Wash",
    price: "₹400 – ₹1,200",
    icon: <Droplet color="var(--primary-color)" />,
    desc: "Pressure wash + interior vacuum. Perfect for weekly maintenance."
  },
  {
    title: "Car wash + interior cleaning",
    price: "₹1,000 – ₹2,500",
    icon: <Wind color="var(--primary-color)" />,
    desc: "Deep cleaning of seats, carpets, and premium exterior car wash."
  },
  {
    title: "Full Detailing",
    price: "₹3,500 – ₹8,999",
    icon: <Zap color="var(--primary-color)" />,
    desc: "3-step paint correction + engine bay cleaning + luxury treatment."
  },
  {
    title: "Ceramic Coating",
    price: "₹8,000 – ₹45,000",
    icon: <ShieldCheck color="var(--primary-color)" />,
    desc: "9H Hardness protection. Showroom shine that lasts for years."
  },
  {
    title: "Premium Coatings",
    price: "₹15,000 – ₹1,80,000",
    icon: <Sparkles color="var(--primary-color)" />,
    desc: "Elite graphene and advanced hybrid coatings for extreme protection."
  }
]

const Services = () => {
  return (
    <section id="services" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our <span style={{ color: 'var(--primary-color)' }}>Expertise</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Premium Care Services Tailored for Kerala's Tropical Climate.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass shine-effect"
              style={{ position: 'relative' }}
            >
              <div style={{ marginBottom: '1.5rem' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', height: '3rem' }}>{s.desc}</p>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-color)', marginBottom: '2rem' }}>{s.price}</div>
              <motion.a 
                href={`https://wa.me/919747229863?text=Hi, I want to book ${s.title}`}
                className="btn-outline"
                style={{ width: '100%', textAlign: 'center', display: 'block' }}
                whileHover={{ background: 'var(--primary-color)', color: '#000' }}
              >
                Book via WhatsApp
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
