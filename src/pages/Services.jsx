import { Briefcase, Users, TrendingUp, Target, Shield, Clock } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import './Services.css'

function Services() {
  const mainServices = [
    {
      icon: Briefcase,
      title: 'Temporary Staffing',
      description: 'Fill your open positions with skilled temporary staff on short or long-term basis. Perfect for seasonal demands and project-based work.',
      features: [
        'Quick onboarding',
        'Flexible contract terms',
        'Pre-screened candidates',
        'Reliable support'
      ]
    },
    {
      icon: Users,
      title: 'Permanent Recruitment',
      description: 'Find the perfect permanent candidates matched to your company culture and needs. We ensure long-term success.',
      features: [
        'In-depth candidate assessment',
        'Cultural fit matching',
        'Market competitive salaries',
        'Replacement guarantee'
      ]
    },
    {
      icon: TrendingUp,
      title: 'HR Management Solutions',
      description: 'Comprehensive HR solutions including payroll, compliance, and workforce management. Simplify your HR operations.',
      features: [
        'Payroll processing',
        'Compliance management',
        'Employee relations',
        'Performance management'
      ]
    },
    {
      icon: Target,
      title: 'Executive Search',
      description: 'Specialist recruitment for senior management and executive level positions. We find top leadership talent.',
      features: [
        'Senior level placements',
        'Executive assessment',
        'Confidential search',
        'Salary benchmarking'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance & Screening',
      description: 'Comprehensive background checks and compliance verification for all candidates. Ensure workplace safety.',
      features: [
        'Background verification',
        'Reference checks',
        'Skills assessment',
        'Legal compliance'
      ]
    },
    {
      icon: Clock,
      title: 'Contract Staffing',
      description: 'Specialized contract workers for specific projects and durations. Scale your team as needed.',
      features: [
        'Project-based staffing',
        'Flexible duration',
        'Specialized skills',
        'Cost-effective solutions'
      ]
    }
  ]

  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="services-header">
        <div className="services-header-content">
          <h1>Our Services</h1>
          <p>Comprehensive workforce solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="services-intro">
        <div className="services-intro-container">
          <div className="intro-image">
            <img src="/staffing-services.jpg" alt="Staffing Services" />
          </div>

          <div className="intro-content">
            <SectionTitle
              title="Why Choose INNOV?"
              centered={false}
            />

            <p>
              With over 15 years of experience in the staffing and recruitment industry, INNOV understands what it takes to build exceptional teams. We provide end-to-end workforce solutions that drive business growth.
            </p>

            <div className="intro-benefits">
              <div className="benefit-item">
                <span className="benefit-number">1</span>
                <div>
                  <h4>Industry Expertise</h4>
                  <p>Deep knowledge across multiple sectors</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">2</span>
                <div>
                  <h4>Fast Turnaround</h4>
                  <p>Quick placement without quality compromise</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">3</span>
                <div>
                  <h4>Dedicated Support</h4>
                  <p>Personal account manager for your needs</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">4</span>
                <div>
                  <h4>Quality Assurance</h4>
                  <p>Thoroughly screened and verified candidates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services-section">
        <div className="main-services-container">
          <SectionTitle
            title="Our Service"
            highlightWord="Offerings"
            subtitle="Explore our comprehensive range of staffing and HR solutions"
          />

          <div className="services-grid">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <SectionTitle
            title="How It"
            highlightWord="Works"
            subtitle="Simple process to get the right talent for your organization"
          />

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Assess Your Needs</h3>
              <p>We understand your specific staffing requirements and business goals through detailed consultation.</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Sourcing Candidates</h3>
              <p>Our team sources and screens qualified candidates from our extensive database and networks.</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Interviews & Selection</h3>
              <p>We conduct interviews and skill assessments to ensure the best match for your organization.</p>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Onboarding Support</h3>
              <p>We provide comprehensive onboarding support to ensure smooth integration into your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="recruitment-section">
        <div className="recruitment-container">
          <div className="recruitment-image">
            <img src="/recruitment.jpg" alt="Recruitment Process" />
          </div>

          <div className="recruitment-content">
            <h2>Build Your Ideal Team</h2>
            <p>
              Whether you need temporary staff for a specific project, permanent employees for long-term positions, or executive-level talent for leadership roles, INNOV has the expertise and resources to deliver results.
            </p>

            <p>
              Our data-driven approach combined with industry expertise ensures that every placement is a perfect fit for both the employer and the candidate.
            </p>

            <ul className="recruitment-list">
              <li>Comprehensive candidate screening and assessment</li>
              <li>Industry-specific recruitment expertise</li>
              <li>Competitive pricing and flexible payment terms</li>
              <li>Ongoing support and relationship management</li>
              <li>Guaranteed replacement if unsatisfied</li>
            </ul>

            <a href="/contact" className="cta-link">Get Started Today →</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="services-cta-container">
          <h2>Ready to transform your workforce?</h2>
          <p>Let's discuss how INNOV can help your organization</p>
          <button className="btn btn-primary">Contact Us Now</button>
        </div>
      </section>
    </div>
  )
}

export default Services
