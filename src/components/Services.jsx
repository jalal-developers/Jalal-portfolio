
import { Rocket, Palette, Settings, Database } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Full-stack web applications using React, Node.js, and modern technologies.',
      icon: <Rocket size={40} className="text-primary" />,
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Responsive and beautiful user interfaces with focus on user experience.',
      icon: <Palette size={40} className="text-primary" />,
    },
    {
      id: 3,
      title: 'API Development',
      description: 'RESTful APIs and backend solutions for scalable applications.',
      icon: <Settings size={40} className="text-primary" />,
    },
    {
      id: 4,
      title: 'Database Design',
      description: 'Efficient database structures with MongoDB and PostgreSQL.',
      icon: <Database size={40} className="text-primary" />,
    },
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title gradient-text" data-aos="fade-down">My Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card" data-aos="fade-up" data-aos-delay={service.id * 100}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
