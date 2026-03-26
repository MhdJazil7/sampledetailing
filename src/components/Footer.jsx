import React from 'react'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer style={{ background: '#050505', color: '#fff', padding: '5rem 5% 2rem', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>ELITE<span style={{ color: 'var(--primary-color)' }}>CAR</span></h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Kerala's most trusted name in premium car detailing and luxury pre-owned cars. Precision care for your automotive needs.
          </p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '2.5' }}>
            <li><a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a></li>
            <li><a href="#sales" style={{ color: 'inherit', textDecoration: 'none' }}>Car Sales</a></li>
            <li><a href="#offers" style={{ color: 'inherit', textDecoration: 'none' }}>Offers</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '2.5' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} color="var(--primary-color)" /> Kochi, Kerala</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} color="var(--primary-color)" /> +91 97472 29863</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} color="var(--primary-color)" /> contact@elitecar.in</li>
          </ul>
        </div>
 
        <div>
           <h4 style={{ marginBottom: '1.5rem' }}>Follow Us</h4>
           <div style={{ display: 'flex', gap: '1rem' }}>
              <motion.a href="https://instagram.com" target="_blank" whileHover={{ scale: 1.1, color: 'var(--primary-color)' }} style={{ color: '#fff', transition: 'color 0.3s' }}>
                <Instagram size={20} />
              </motion.a>
              <motion.a href="https://facebook.com" target="_blank" whileHover={{ scale: 1.1, color: 'var(--primary-color)' }} style={{ color: '#fff', transition: 'color 0.3s' }}>
                <Facebook size={20} />
              </motion.a>
              <motion.a href="https://twitter.com" target="_blank" whileHover={{ scale: 1.1, color: 'var(--primary-color)' }} style={{ color: '#fff', transition: 'color 0.3s' }}>
                <Twitter size={20} />
              </motion.a>
           </div>
        </div>

      </div>

      <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        © 2026 EliteCar Detailing & Sales Kerala. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
