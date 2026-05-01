import { Briefcase, Users, TrendingUp, Target } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import ServiceCard from '../components/ServiceCard'
import SectionTitle from '../components/SectionTitle'
import './Home.css'

function Home() {
  const services = [
    {
      icon: Briefcase,
      title: 'Temp Staffing',
      description: 'Fill your open positions with skilled temporary staff on short or long-term basis.'
    },
    {
      icon: Users,
      title: 'Permanent Recruitment',
      description: 'Find the perfect permanent candidates matched to your company culture and needs.'
    },
    {
      icon: TrendingUp,
      title: 'HR Management',
      description: 'Comprehensive HR solutions including payroll, compliance, and workforce management.'
    },
    {
      icon: Target,
      title: 'Executive Search',
      description: 'Specialist recruitment for senior management and executive level positions.'
    }
  ]

  const stats = [
    { number: '2000+', label: 'Placements Made' },
    { number: '500+', label: 'Active Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '10K+', label: 'Satisfied Employees' }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection
        title="Talent meets Opportunity!"
        subtitle="Industry specialists in temp staffing, managed services, and expertise hiring. Find the right talent for your business."
        imageSrc="/hero-professional.jpg"
        imageAlt="Professional woman in business setting"
        cta1Text="Apply Now"
        cta2Text="Request Talent"
      />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <SectionTitle
            title="How we can"
            highlightWord="help"
            subtitle="We provide comprehensive staffing and HR solutions tailored to your business needs"
          />

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why INNOV Section */}
      <section className="why-innov-section">
        <div className="why-innov-container">
          <div className="why-innov-image">
            <img src="/team-group.jpg" alt="INNOV Team" />
          </div>

          <div className="why-innov-content">
            <h2>Why INNOV?</h2>
            <p>
              We are a leading workforce solutions provider established in 2008. With operations in major cities across the region, we provide end-to-end recruitment, staffing and managed services to top 500 companies and growing startups alike.
            </p>

            <ul className="why-innov-list">
              <li>Industry-leading expertise and experience</li>
              <li>Dedicated account management</li>
              <li>Fast and efficient hiring process</li>
              <li>Competitive pricing</li>
            </ul>

            <a href="/about" className="learn-more-link">Learn More →</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to find your next great hire?</h2>
          <p>Let's work together to build your dream team</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get In Touch</button>
            <button className="btn btn-secondary-light">View Our Services</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
