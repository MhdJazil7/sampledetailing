import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Timer, FireExtinguisher as Fire, Gift } from 'lucide-react'

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState(3600 * 5) // 5 hours countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <section id="offers">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="glass" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              padding: '0.5rem 1.5rem', 
              color: 'var(--primary-color)',
              marginBottom: '1rem',
              border: '1px solid var(--primary-color)'
            }}
          >
            <Fire size={20} /> <span style={{ fontWeight: 800 }}>LIMITED TIME DEALS</span>
          </motion.div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Festival <span style={{ color: 'var(--accent-color)' }}>Offers</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Exclusive discounts for our Kerala community.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {/* Offer 1 */}
          <motion.div 
            className="glass shine-effect" 
            whileHover={{ scale: 1.02 }}
            style={{ textAlign: 'center', borderColor: 'var(--primary-color)' }}
          >
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Premium Pack</h3>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem' }}>₹9,999</div>
            <p style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 600 }}>Interior + Exterior Detailing</p>
            <div style={{ textDecoration: 'line-through', color: 'var(--text-muted)', marginBottom: '2rem' }}>Was ₹15,000</div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', color: '#ff4444' }}>
              <Timer size={20} />
              <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>{formatTime(timeLeft)}</span>
            </div>

            <motion.a 
              href={`https://wa.me/919747229863?text=Hi, I want to claim the Premium Pack special offer!`}
              whileHover={{ scale: 1.02 }}
              className="btn-primary" 
              style={{ width: '100%', padding: '15px', display: 'block', textAlign: 'center', textDecoration: 'none' }}
            >
              Claim This Offer
            </motion.a>
            <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: 'var(--primary-color)' }}>Only 4 slots left today!</p>
          </motion.div>

          {/* Offer 2 */}
          <motion.div 
            className="glass" 
            whileHover={{ scale: 1.02 }}
            style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent)' }}
          >
             <Gift size={40} color="var(--accent-color)" style={{ margin: '0 auto 1.5rem' }} />
             <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Summer Offer</h3>
             <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Ceramic Coating + Interior & Exterior Detailing Special.</p>
             <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-color)', marginBottom: '2rem' }}>₹6,999</div>
             <motion.a 
               href={`https://wa.me/919747229863?text=Hi, I want to know more about the Summer Offer!`}
               whileHover={{ scale: 1.02 }}
               className="btn-outline" 
               style={{ width: '100%', padding: '15px', borderColor: 'var(--accent-color)', display: 'block', textAlign: 'center', textDecoration: 'none' }}
             >
               View Summer Deals
             </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Offers
