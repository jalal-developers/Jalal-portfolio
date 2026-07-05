import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo flex items-center gap-2">
          <img src="/logo.webp" alt="Jalal Dev Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
          <span>Jalal Dev</span>
        </a>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-link">Home</a>
          <a href="#services" className="navbar-link">Services</a>
          <a href="#portfolio" className="navbar-link">Portfolio</a>
          <a href="#pricing" className="navbar-link">Pricing</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
