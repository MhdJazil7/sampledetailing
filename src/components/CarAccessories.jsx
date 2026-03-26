import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Star, ShieldCheck } from 'lucide-react'
import perfumeImg from '../assets/perfume.png'
import vacuumImg from '../assets/vacuum.png'
import microfiberImg from '../assets/microfiber.png'

const accessories = [
  {
    name: "Luxury Car Diffuser (Amber & Wood)",
    price: "₹1,299",
    oldPrice: "₹1,999",
    rating: "4.9",
    reviews: "320",
    img: perfumeImg,
    tag: "Bestseller",
    desc: "Long-lasting premium fragrance with a sleek glass and wood unspillable design."
  },
  {
    name: "Wireless Car Vacuum Pro",
    price: "₹3,499",
    oldPrice: "₹4,999",
    rating: "4.8",
    reviews: "154",
    img: vacuumImg,
    tag: "High Power",
    desc: "120W high-suction portable cordless vacuum with HEPA filter and blue LED."
  },
  {
    name: "Elite Microfiber Detailing Kit",
    price: "₹999",
    oldPrice: "₹1,499",
    rating: "5.0",
    reviews: "560",
    img: microfiberImg,
    tag: "Must Have",
    desc: "Pack of 3 ultra-plush 800 GSM scratch-free edgeless microfiber towels."
  }
]

const CarAccessories = () => {
  return (
    <section id="accessories" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Premium <span style={{ color: 'var(--primary-color)' }}>Accessories</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>Essential luxury add-ons to maintain that pristine showroom finish.</p>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {accessories.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass"
              whileHover={{ scale: 1.02, translateY: -5 }}
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', height: '260px' }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  top: '1rem', 
                  right: '1rem', 
                  background: 'var(--accent-color)', 
                  color: '#000', 
                  padding: '4px 12px', 
                  fontSize: '0.8rem', 
                  fontWeight: 700, 
                  borderRadius: '20px' 
                }}>
                  {item.tag}
                </div>
              </div>
              
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>{item.name}</h3>
                </div>
                
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>
                   <div style={{ display: 'flex', gap: '2px' }}>
                     {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--accent-color)" color="var(--accent-color)" />)}
                   </div>
                   <span style={{ color: 'var(--text-muted)' }}>({item.reviews})</span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>{item.price}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>{item.oldPrice}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    <ShieldCheck size={14} /> Global Shipping
                  </div>
                </div>

                <motion.a 
                  href={`https://wa.me/919747229863?text=Hi, I want to order the ${item.name} for ${item.price}!`}
                  whileHover={{ scale: 1.05 }}
                  className="btn-primary" 
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                >
                  <ShoppingBag size={18} /> Order on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CarAccessories
