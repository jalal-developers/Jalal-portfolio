import React, { useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillsTicker from './components/SkillsTicker'
import AmbientBackground from './components/AmbientBackground'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'

const Services = lazy(() => import('./components/Services'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Pricing = lazy(() => import('./components/Pricing'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <main className="app">
      <AmbientBackground />
      <Navbar />
      <Hero />
      <SkillsTicker />
      <Suspense fallback={<div style={{minHeight: '100vh'}} />}>
        <Services />
        <Portfolio />
        <Pricing />
        <Footer />
      </Suspense>
    </main>
  )
}
