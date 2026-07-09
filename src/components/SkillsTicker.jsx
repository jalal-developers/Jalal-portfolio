import { useEffect } from 'react'

export default function SkillsTicker() {
  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'HTML/CSS',
    'REST APIs',
    'Git',
  ]

  useEffect(() => {
    const ticker = document.querySelector('.skills-ticker')
    if (ticker) {
      // Clone items for infinite scroll
      const items = Array.from(ticker.querySelectorAll('span'))
      items.forEach(item => {
        ticker.appendChild(item.cloneNode(true))
      })
    }
  }, [])

  return (
    <section className="skills-section">
      <div className="skills-ticker">
        {skills.map((skill, i) => (
          <span key={i} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
