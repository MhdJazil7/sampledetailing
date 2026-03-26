import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CarAccessories from './components/CarAccessories'
import PriceComparison from './components/PriceComparison'
import TrustSection from './components/TrustSection'
import Offers from './components/Offers'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Offers />
        <CarAccessories />
        <TrustSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
