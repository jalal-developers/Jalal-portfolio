import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import Hero from './Hero';

describe('Hero component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders without crashing and displays correct text', () => {
    render(<Hero />);
    expect(screen.getByText(/Hi, I'm Jalal Dev/i)).toBeInTheDocument();
    expect(screen.getByText(/Full Stack Developer & Web Designer/i)).toBeInTheDocument();
  });

  it('renders the WhatsApp link correctly', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /Get In Touch/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      'https://wa.me/923294420027?text=Hi%20Jalal%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project%3F'
    );
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('adds and removes the animation class on profile picture click', () => {
    render(<Hero />);

    const profileImage = screen.getByAltText('Profile');
    const profileFrame = profileImage.parentElement;

    expect(profileFrame).toHaveClass('profile-frame');
    expect(profileFrame).not.toHaveClass('animate-spin-bounce');

    fireEvent.click(profileFrame);

    expect(profileFrame).toHaveClass('animate-spin-bounce');

    act(() => {
      vi.advanceTimersByTime(600);
    });

    expect(profileFrame).not.toHaveClass('animate-spin-bounce');
  });
});
