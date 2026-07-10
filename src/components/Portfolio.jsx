
import React from 'react'

import { Dumbbell, Scissors, Flower2, Car, Cpu, Utensils } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Gym Management',
    description: 'Full dashboard for managing members.',
    tags: ['Azure', 'Database'],
    image: <Dumbbell size={48} className="text-gray-300" />,
    link: '/gym.html',
  },
  {
    id: 2,
    title: 'Barber Shop UI',
    description: 'High-conversion booking landing page.',
    tags: ['Frontend', 'Animation'],
    image: <Scissors size={48} className="text-gray-300" />,
    link: '/barber.html',
  },
  {
    id: 3,
    title: 'Luxury Salon UI',
    description: 'High-converting bridal booking landing page.',
    tags: ['UI/UX', 'Conversion'],
    image: <Flower2 size={48} className="text-gray-300" />,
    link: '/salon.html',
  },
  {
    id: 4,
    title: 'Car Rental UI',
    description: 'Premium performance vehicle booking experience.',
    tags: ['Design', 'Performance'],
    image: <Car size={48} className="text-gray-300" />,
    link: '/CarRental.html',
  },
  {
    id: 5,
    title: 'Electronic UI',
    description: 'Modern e-commerce interface for electronic devices.',
    tags: ['E-commerce', 'Design'],
    image: <Cpu size={48} className="text-gray-300" />,
    link: '/electronic.html',
  },
  {
    id: 6,
    title: 'Catering Service UI',
    description: 'Elegant interface for a premium catering service.',
    tags: ['Food', 'Design'],
    image: <Utensils size={48} className="text-gray-300" />,
    link: '/catering.html',
  },
]


export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title text-white" style={{color: 'white'}} data-aos="fade-down">Recent Masterpieces</h2>
        <div className="portfolio-grid">
          {projects.map(project => (
            <a href={project.link} key={project.id} className="portfolio-card" data-aos="fade-up" data-aos-delay={project.id * 100}>
              <div className="project-image">{project.image}</div>
              <div className="portfolio-content-inner">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.join(' • ')}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
