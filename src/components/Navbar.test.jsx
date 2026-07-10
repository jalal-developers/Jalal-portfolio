/* global describe, it, expect */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

describe('Navbar Component', () => {
  it('renders correctly with closed menu initially', () => {
    const { container } = render(<Navbar />)
    expect(screen.getByText('Jalal Dev')).toBeInTheDocument()

    const menu = container.querySelector('.navbar-menu')
    expect(menu).not.toHaveClass('active')
  })

  it('toggles menu open and closed when hamburger is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)

    const hamburger = container.querySelector('.hamburger')
    const menu = container.querySelector('.navbar-menu')

    expect(menu).not.toHaveClass('active')

    // Click to open
    await user.click(hamburger)
    expect(menu).toHaveClass('active')

    // Click to close
    await user.click(hamburger)
    expect(menu).not.toHaveClass('active')
  })
})
