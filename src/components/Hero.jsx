import React, { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'
import profileImg from '../assets/JalalProfile1.jpeg'

export default function Hero() {
  const [isClicked, setIsClicked] = useState(false);
  const whatsappLink = 'https://wa.me/923294420027?text=Hi%20Jalal%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project%3F'

  const handleProfileClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-right">
          <h1 className="hero-title gradient-text">Hi, I'm Jalal Dev <Sparkles className="wave inline-block text-accent" size={40} /></h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100">Full Stack Developer & Web Designer</p>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
            Building beautiful and functional web applications that solve real-world problems.
          </p>
          <div data-aos="fade-up" data-aos-delay="300">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button">
              Get In Touch <Send className="cta-icon" size={18} />
            </a>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left" data-aos-delay="200">
          <div className="circular-animation-container">
            <svg className="rotating-rings ring-1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="240" stroke="var(--primary-color)" strokeWidth="2" fill="none" strokeDasharray="150 100" opacity="0.8" />
            </svg>
            <svg className="rotating-rings ring-2" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="220" stroke="var(--secondary-color)" strokeWidth="2" fill="none" strokeDasharray="50 250" opacity="0.6" />
            </svg>
            <svg className="rotating-rings ring-3" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="230" stroke="var(--primary-color)" strokeWidth="1" fill="none" strokeDasharray="10 30" opacity="0.5" />
            </svg>
          </div>
          <div 
            className={`profile-frame ${isClicked ? 'animate-spin-bounce' : ''}`}
            onClick={handleProfileClick}
          >
            <img src={profileImg} alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
