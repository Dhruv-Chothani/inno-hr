import SectionTitle from '../components/SectionTitle'
import StatsSection from '../components/StatsSection'
import TeamMember from '../components/TeamMember'
import './About.css'

function About() {
  const stats = [
    { number: '2000+', label: 'Placements Made' },
    { number: '500+', label: 'Active Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '10K+', label: 'Happy Employees' }
  ]

  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Chief Executive Officer',
      image: '/team-member-1.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Operating Officer',
      image: '/team-member-2.jpg'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Recruitment',
      image: '/team-member-3.jpg'
    }
  ]

  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="about-header-content">
          <h1>About Us</h1>
          <p>Leading workforce solutions provider since 2008</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="overview-container">
          <div className="overview-image">
            <img src="/team-group.jpg" alt="INNOV Team" />
          </div>

          <div className="overview-content">
            <SectionTitle
              title="Overview"
              centered={false}
            />
            
            <p>
              INNOV is an independent, professionally managed recruitment firm founded on the foundation of service excellence and integrity. We are committed to delivering outstanding recruitment services to both employers and candidates alike.
            </p>

            <p>
              With our extensive experience in the industry, we understand the unique challenges businesses face when it comes to talent acquisition and management. Our team of experts work tirelessly to connect the right talent with the right opportunities.
            </p>

            <div className="overview-features">
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h4>Data-Driven Approach</h4>
                <p>We use analytics and insights to find the best matches for your organization</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <h4>Industry Expertise</h4>
                <p>Deep knowledge across various sectors and industries</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h4>Quick Turnaround</h4>
                <p>Fast and efficient recruitment without compromising quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To build a professional workforce solution platform creating better employment opportunities for people and fulfilling workforce requirements of businesses in a mutually beneficial way while contributing to societal development.
            </p>
          </div>

          <div className="vision-card">
            <div className="card-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted and progressive workforce solutions provider, recognized for innovation, ethics, and excellence in connecting talented individuals with organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <SectionTitle
            title="Our"
            highlightWord="Team"
            subtitle="Meet the talented individuals driving INNOV's success"
          />

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <SectionTitle
            title="Our"
            highlightWord="Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="values-grid">
            <div className="value-card">
              <h4>Integrity</h4>
              <p>We believe in honest and transparent dealings with all our stakeholders</p>
            </div>

            <div className="value-card">
              <h4>Excellence</h4>
              <p>We strive for excellence in every aspect of our service delivery</p>
            </div>

            <div className="value-card">
              <h4>Innovation</h4>
              <p>We continuously innovate to stay ahead in the recruitment industry</p>
            </div>

            <div className="value-card">
              <h4>Customer Focus</h4>
              <p>Our clients and candidates are at the heart of everything we do</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
