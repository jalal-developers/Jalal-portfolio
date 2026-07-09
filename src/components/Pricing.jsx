import { useState, useEffect, useMemo } from 'react'
import { Check } from 'lucide-react'

export default function Pricing() {
  const [currency, setCurrency] = useState('USD')
  const [exchangeRate, setExchangeRate] = useState(1)

  useEffect(() => {
    Promise.all([
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .catch(err => {
          console.error("Could not fetch location", err);
          return null;
        }),
      fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .catch(err => {
          console.error("Could not fetch live rates", err);
          return null;
        })
    ]).then(([locationData, ratesData]) => {
      let userCurrency = 'USD';

      if (locationData) {
        if (locationData.country_code === 'PK') {
          userCurrency = 'PKR';
          setExchangeRate(278); // fallback
        } else if (locationData.country_code === 'IN') {
          userCurrency = 'INR';
          setExchangeRate(83); // fallback
        }
      }

      setCurrency(userCurrency);

      if (ratesData && ratesData.rates) {
        if (userCurrency === 'PKR' && ratesData.rates.PKR) {
          setExchangeRate(ratesData.rates.PKR);
        } else if (userCurrency === 'INR' && ratesData.rates.INR) {
          setExchangeRate(ratesData.rates.INR);
        }
      }
    });
  }, [])

  const plans = [
    {
      id: 1,
      name: 'Basic',
      priceUSD: 150,
      description: 'Perfect for small projects and startups',
      features: [
        'Responsive Design',
        '5 Pages',
        'Basic SEO',
        'Contact Form',
        '30 Days Support',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Standard',
      priceUSD: 400,
      description: 'For growing businesses and apps',
      features: [
        'Everything in Basic',
        'Unlimited Pages',
        'Advanced SEO',
        'Payment Integration',
        'Analytics Dashboard',
        '90 Days Support',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Premium',
      priceUSD: 800,
      description: 'Full-featured online store',
      features: [
        'Everything in Standard',
        'Product Catalog',
        'Inventory Management',
        'Order Processing',
        'Customer Management',
        '6 Months Support',
      ],
      popular: false,
    },
  ]

  const formatter = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0
    });
  }, [currency]);

  const formatPrice = (priceUSD) => {
    const converted = priceUSD * exchangeRate;
    return formatter.format(converted);
  }

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <h2 className="section-title gradient-text" data-aos="fade-down">Pricing Plans</h2>
        <p className="section-subtitle" data-aos="fade-down" data-aos-delay="100">Choose the perfect plan for your project</p>
        <div className="pricing-grid">
          {plans.map(plan => (
            <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`} data-aos="zoom-in" data-aos-delay={plan.id * 100}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-price">{formatPrice(plan.priceUSD)}</div>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature flex items-center gap-2">
                    <Check size={18} className="text-primary flex-shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="plan-button">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
