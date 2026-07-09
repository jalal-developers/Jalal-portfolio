import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SkillsTicker from './SkillsTicker'

describe('SkillsTicker', () => {
  it('renders the skills section and ticker', () => {
    const { container } = render(<SkillsTicker />)

    // Check if the section and ticker exist
    const section = container.querySelector('.skills-section')
    expect(section).toBeInTheDocument()

    const ticker = container.querySelector('.skills-ticker')
    expect(ticker).toBeInTheDocument()
  })

  it('clones the skill items for the infinite scroll effect', () => {
    const { container } = render(<SkillsTicker />)

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

    // Due to the useEffect cloning, we should have exactly double the amount of spans
    const spans = container.querySelectorAll('.skill-tag')
    expect(spans).toHaveLength(skills.length * 2)

    // Verify the content is duplicated correctly
    skills.forEach((skill, index) => {
      expect(spans[index]).toHaveTextContent(skill)
      expect(spans[index + skills.length]).toHaveTextContent(skill)
    })
  })
})
