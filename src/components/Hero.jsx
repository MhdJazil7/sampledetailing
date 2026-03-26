import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import heroPoster from '../assets/hero_car.png'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="home" style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: 0,
      zIndex: 1,
      background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroPoster}) center/cover no-repeat`
    }}>
      {/* 
        🚀 BACKGROUND VIDEO: 
        This is your continuous looping background.
        The file is located at `public/intro_video.mp4`.
      */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        poster={heroPoster}
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.35)' // Keeps text readable
        }}
      >
        <source src="/intro_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '30%',
        background: 'linear-gradient(to top, var(--bg-color), transparent)'
      }} />

      <div className="container" style={{ position: 'relative', textAlign: 'center', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <h1 style={{ 
            fontSize: isMobile ? 'clamp(1.3rem, 7.5vw, 1.8rem)' : 'clamp(2.5rem, 9vw, 5rem)', 
            marginBottom: '1rem', 
            lineHeight: 1.2, 
            padding: '0 0.5rem' 
          }}>
            Kerala's Number 1 <br /> 
            {isMobile ? (
              <>
                <span style={{ color: 'var(--primary-color)' }}>Car Detailing</span> <br />
                <span style={{ color: 'var(--primary-color)' }}>& Accessories</span>
              </>
            ) : (
              <span style={{ color: 'var(--primary-color)' }}>Car Detailing & Accessories</span>
            )}
          </h1>
          <p style={{ fontSize: isMobile ? '0.95rem' : '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 2.5rem', padding: '0 1rem' }}>
            Premium Car Care & Luxury Accessories. <br className="desktop-only" />
            Experience World-Class Detailing in Kochi, Calicut & Trivandrum.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '1rem' : '1.5rem', 
            justifyContent: 'center',
            flexDirection: isMobile ? 'column' : 'row',
            padding: '0 2rem'
          }}>
            <motion.a 
               href="#services"
               whileHover={{ scale: 1.05 }}
               className="btn-primary"
            >
              Explore Services
            </motion.a>
            <motion.a 
               href="#accessories"
               whileHover={{ scale: 1.05 }}
               className="btn-outline"
            >
              View Accessories
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-muted)',
          zIndex: 10
        }}
      >
        Scroll to Explore
      </motion.div>
    </section>
  )
}

export default Hero
