
import { Mail, Phone, Shield, FileText } from 'lucide-react'

const Linkedin = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M9 18c-4.5 1.5-5-2.5-7-3" />
  </svg>
);

const Twitter = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12 3 12c.5.2 1.1.2 1.6.1-2.4-1-3.6-3-3-5.5.6.3 1.2.5 1.8.6C1 6 2.3 2 5 3c2.8 3.5 6.9 5.8 11 6 .4-3 3-5 5.7-3.9 1.4.6 2.3 1.8 2.3 3.3z" />
  </svg>
);

const Instagram = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="footer" data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Jalal Dev</h3>
            <p>Full Stack Developer & Web Designer</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p className="flex items-center gap-2 mb-2">
              <Mail size={18} className="text-primary" /> 
              <a href="mailto:jalalmashraf158@gmail.com">jalalmashraf158@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-primary" /> 
              <a href="tel:+923294420027">+923294420027</a>
            </p>
          </div>

          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-links flex flex-col gap-2">
              <a href="https://www.linkedin.com/in/jalal-ashraf-aaa7003ba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin size={18} className="text-primary" /> LinkedIn
              </a>
              <a href="https://github.com/Jalal-developers" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={18} className="text-primary" /> GitHub
              </a>
              <a href="https://twitter.com/Jalal363522133" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Twitter size={18} className="text-primary" /> Twitter
              </a>
              <a href="https://www.instagram.com/jalaldev.tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Instagram size={18} className="text-primary" /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Jalal Dev. All rights reserved.</p>
          <div className="footer-links flex items-center gap-4">
            <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Shield size={16} className="text-primary" /> Privacy Policy
            </a>
            <a href="/terms.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FileText size={16} className="text-primary" /> Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
