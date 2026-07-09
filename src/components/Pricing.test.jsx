import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import Pricing from './Pricing';

describe('Pricing Component', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn();
    global.fetch = fetchMock;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders default USD pricing when location fetch fails', async () => {
    fetchMock.mockRejectedValue(new Error('Network error'));

    render(<Pricing />);

    expect(screen.getByText('Pricing Plans')).toBeInTheDocument();

    // Check if basic plan renders $150
    const basicPrice = screen.getByText('$150');
    expect(basicPrice).toBeInTheDocument();
  });

  it('renders INR pricing correctly with fallback rate', async () => {
    fetchMock.mockImplementation((url) => {
      if (url === 'https://ipapi.co/json/') {
        return Promise.resolve({
          json: () => Promise.resolve({ country_code: 'IN' }),
        });
      }
      if (url === 'https://open.er-api.com/v6/latest/USD') {
        return Promise.reject(new Error('Rate fetch failed'));
      }
    });

    render(<Pricing />);

    // Basic is 150 * 83 = 12450
    // Wait for the asynchronous fetch and state updates to happen
    await waitFor(() => {
      expect(screen.getByText('₹12,450')).toBeInTheDocument();
    });
  });

  it('renders PKR pricing correctly with live exchange rate', async () => {
    fetchMock.mockImplementation((url) => {
      if (url === 'https://ipapi.co/json/') {
        return Promise.resolve({
          json: () => Promise.resolve({ country_code: 'PK' }),
        });
      }
      if (url === 'https://open.er-api.com/v6/latest/USD') {
        return Promise.resolve({
          json: () => Promise.resolve({ rates: { PKR: 300 } }),
        });
      }
    });

    render(<Pricing />);

    // Basic is 150 * 300 = 45000
    await waitFor(() => {
      expect(screen.getByText('PKR 45,000')).toBeInTheDocument();
    });
  });

  it('renders USD pricing for non-PK/IN locations', async () => {
    fetchMock.mockImplementation((url) => {
      if (url === 'https://ipapi.co/json/') {
        return Promise.resolve({
          json: () => Promise.resolve({ country_code: 'US' }),
        });
      }
      if (url === 'https://open.er-api.com/v6/latest/USD') {
        return Promise.resolve({
          json: () => Promise.resolve({ rates: { PKR: 300, INR: 83 } }),
        });
      }
    });

    render(<Pricing />);

    await waitFor(() => {
      expect(screen.getByText('$150')).toBeInTheDocument();
    });
  });
});
