import { useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'

const AmbientBackground = lazy(() => import('./components/AmbientBackground'))
const SkillsTicker = lazy(() => import('./components/SkillsTicker'))
const Services = lazy(() => import('./components/Services'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Pricing = lazy(() => import('./components/Pricing'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  useEffect(() => {
    // Defer AOS initialization to prevent forced synchronous reflows during initial load
    setTimeout(() => {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
      })
    }, 0);
  }, [])

  return (
    <main className="app">
      <Navbar />
      <Hero />
      <Suspense fallback={<div style={{minHeight: '10vh'}} />}>
        <AmbientBackground />
        <SkillsTicker />
        <Services />
        <Portfolio />
        <Pricing />
        <Footer />
      </Suspense>
    </main>
  )
}
