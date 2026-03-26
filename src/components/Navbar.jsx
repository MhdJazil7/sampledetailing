import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Car, ShoppingBag } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Offers', href: '#offers' },
    { name: 'Reviews', href: '#reviews' },
  ]

  return (
    <>
      <nav className="glass" style={{
        position: 'fixed',
        top: scrolled ? '1rem' : '1.5rem',
        left: '5%',
        right: '5%',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '0.75rem 1rem' : '0.75rem 2rem',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        borderColor: scrolled ? 'var(--primary-color)' : 'var(--glass-border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Car size={32} color="var(--primary-color)" />
          <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '1px' }}>
            ELITE<span style={{ color: 'var(--primary-color)' }}>CAR</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="desktop-only" style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} style={{ color: 'white', textDecoration: 'none', fontWeight: 500, transition: 'color 0.3s' }}>{link.name}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary desktop-only"
            style={{ padding: '8px 20px', fontSize: '0.9rem' }}
          >
            Book Now
          </motion.a>

          {/* Mobile Toggle */}
          <button 
            className="mobile-only" 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 1100 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(5, 5, 5, 0.98)',
              backdropFilter: 'blur(10px)',
              zIndex: 1050,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem'
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '2rem',
                  fontWeight: 700,
                  letterSpacing: '2px'
                }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{ padding: '15px 40px', fontSize: '1.2rem' }}
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
