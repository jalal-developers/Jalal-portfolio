import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import App from './App'
import AOS from 'aos'

// Mock AOS
vi.mock('aos', () => ({
  default: {
    init: vi.fn(),
  },
}))

// Instead of actual lazy loading, we can mock React.lazy to just return the regular mocked component,
// or simply use act() with real timers and await the standard lazy resolution.
// Let's replace vi.useFakeTimers() logic just around AOS check or not use it globally to avoid hanging lazy loads.

// Mock standard components
vi.mock('./components/Navbar', () => ({ default: () => <div data-testid="navbar-mock" /> }))
vi.mock('./components/Hero', () => ({ default: () => <div data-testid="hero-mock" /> }))

// Mock lazy loaded components
vi.mock('./components/AmbientBackground', () => ({ default: () => <div data-testid="ambient-mock" /> }))
vi.mock('./components/SkillsTicker', () => ({ default: () => <div data-testid="skills-mock" /> }))
vi.mock('./components/Services', () => ({ default: () => <div data-testid="services-mock" /> }))
vi.mock('./components/Portfolio', () => ({ default: () => <div data-testid="portfolio-mock" /> }))
vi.mock('./components/Pricing', () => ({ default: () => <div data-testid="pricing-mock" /> }))
vi.mock('./components/Footer', () => ({ default: () => <div data-testid="footer-mock" /> }))

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders standard components', async () => {
    render(<App />)

    expect(screen.getByTestId('navbar-mock')).toBeInTheDocument()
    expect(screen.getByTestId('hero-mock')).toBeInTheDocument()

    // We should await the lazy load resolution to avoid "suspended resource finished loading inside a test" warnings
    await waitFor(() => {
      expect(screen.getByTestId('ambient-mock')).toBeInTheDocument()
    })
  })

  it('renders lazy loaded components', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getByTestId('ambient-mock')).toBeInTheDocument()
      expect(screen.getByTestId('skills-mock')).toBeInTheDocument()
      expect(screen.getByTestId('services-mock')).toBeInTheDocument()
      expect(screen.getByTestId('portfolio-mock')).toBeInTheDocument()
      expect(screen.getByTestId('pricing-mock')).toBeInTheDocument()
      expect(screen.getByTestId('footer-mock')).toBeInTheDocument()
    })
  })

  it('initializes AOS with correct config after timeout', async () => {
    vi.useFakeTimers()
    render(<App />)

    // AOS should not be called immediately due to setTimeout
    expect(AOS.init).not.toHaveBeenCalled()

    // Advance timers for the setTimeout
    await vi.runAllTimersAsync()

    expect(AOS.init).toHaveBeenCalledWith({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
    vi.useRealTimers()
  })
})
