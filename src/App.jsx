import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillsTicker from './components/SkillsTicker'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import AmbientBackground from './components/AmbientBackground'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <div className="app">
      <AmbientBackground />
      <Navbar />
      <Hero />
      <SkillsTicker />
      <Services />
      <Portfolio />
      <Pricing />
      <Footer />
    </div>
  )
}
