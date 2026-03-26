import React, { useState, useEffect } from 'react'
import { Check, X } from 'lucide-react'

const ComparisonTable = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="comparison">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1rem', padding: '0 1rem' }}>The <span style={{ color: 'var(--primary-color)' }}>Smart</span> Choice</h2>
          <p style={{ color: 'var(--text-muted)', padding: '0 1.5rem' }}>Why elite car owners in Kerala choose us over local shops.</p>
        </div>

        <div className="glass" style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden', padding: isMobile ? '0.75rem' : '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? '0.8rem' : '1rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <th style={{ padding: isMobile ? '0.5rem' : '1.5rem', textAlign: 'left' }}>Service</th>
                <th style={{ padding: isMobile ? '0.5rem' : '1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>Shop</th>
                <th style={{ padding: isMobile ? '0.5rem' : '1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>Studio</th>
                <th style={{ padding: isMobile ? '0.5rem' : '1.5rem', textAlign: 'center', color: 'var(--primary-color)' }}>Our</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Basic Wash", local: "₹800", studio: "₹1,500", ours: "₹499" },
                { name: "Full Detail", local: "₹6k", studio: "₹12k", ours: "₹3,9k" },
                { name: "Ceramic", local: "₹15k", studio: "₹30k", ours: "₹8,9k" }
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td style={{ padding: isMobile ? '0.75rem 0.5rem' : '1.25rem', fontWeight: 600 }}>{row.name}</td>
                  <td style={{ padding: isMobile ? '0.75rem 0.5rem' : '1.25rem', textAlign: 'center', color: 'var(--text-muted)' }}>{row.local}</td>
                  <td style={{ padding: isMobile ? '0.75rem 0.5rem' : '1.25rem', textAlign: 'center', color: 'var(--text-muted)' }}>{row.studio}</td>
                  <td style={{ padding: isMobile ? '0.75rem 0.5rem' : '1.25rem', textAlign: 'center', fontWeight: 800, color: 'var(--primary-color)' }}>{row.ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem', background: 'rgba(0,242,255,0.05)', borderRadius: '8px' }}>
             <span style={{ fontWeight: 700, color: 'var(--primary-color)', fontSize: isMobile ? '0.85rem' : '1rem' }}>“Best Value for Luxury Maintenance in Kerala”</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable
