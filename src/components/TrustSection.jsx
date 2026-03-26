import React from 'react'
import { motion } from 'framer-motion'
import { Star, Users, Award, MapPin } from 'lucide-react'

const TrustSection = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="reviews" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', marginBottom: '1rem' }}>Trusted by <span style={{ color: 'var(--primary-color)' }}>Thousands</span></h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#ffcc00', marginBottom: '0.5rem' }}>
            <Star fill="#ffcc00" size={isMobile ? 18 : 24} />
            <Star fill="#ffcc00" size={isMobile ? 18 : 24} />
            <Star fill="#ffcc00" size={isMobile ? 18 : 24} />
            <Star fill="#ffcc00" size={isMobile ? 18 : 24} />
            <Star fill="#ffcc00" size={isMobile ? 18 : 24} />
          </div>
          <p style={{ fontWeight: 700, fontSize: isMobile ? '0.85rem' : '1rem' }}>4.9/5 Google Rating Based on 1,200+ Reviews</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: isMobile ? '2rem' : '3rem',
          textAlign: 'center'
        }}>
          <div>
            <Users size={isMobile ? 36 : 48} color="var(--primary-color)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>10,000+</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Happy Customers</p>
          </div>
          <div>
            <Award size={isMobile ? 36 : 48} color="var(--primary-color)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>15+ Years</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Experience</p>
          </div>
          <div>
            <MapPin size={isMobile ? 36 : 48} color="var(--primary-color)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>3 Cities</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Kochi | Calicut | Trivandrum</p>
          </div>
        </div>

        <div style={{ marginTop: '4rem' }} className="glass">
           <p style={{ fontSize: isMobile ? '0.95rem' : '1.3rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
             "The only place car enthusiasts in Kerala can trust. The way they detailed my Audi A4 was stunning!"
           </p>
           <h4 style={{ color: 'var(--primary-color)', fontSize: isMobile ? '0.9rem' : '1.1rem' }}>— Rahul K., Kochi</h4>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
