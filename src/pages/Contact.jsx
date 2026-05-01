import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="contact-header-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Let's discuss how we can help your organization</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="info-card">
            <div className="info-icon">
              <Phone size={32} />
            </div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
            <p className="info-detail">Available Monday - Friday</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Mail size={32} />
            </div>
            <h3>Email</h3>
            <p>info@innov.com</p>
            <p className="info-detail">We'll respond within 24 hours</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <MapPin size={32} />
            </div>
            <h3>Address</h3>
            <p>123 Business Avenue</p>
            <p className="info-detail">City, State 12345</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="form-content">
            <SectionTitle
              title="Send us a"
              highlightWord="Message"
              centered={false}
            />

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your staffing needs..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  Thank you for your message! We'll be in touch shortly.
                </div>
              )}
            </form>
          </div>

          <div className="form-features">
            <h3>Why Contact INNOV?</h3>
            <ul>
              <li>
                <strong>Fast Response:</strong>
                <p>Get timely replies to your inquiries</p>
              </li>
              <li>
                <strong>Expert Consultation:</strong>
                <p>Speak with industry specialists</p>
              </li>
              <li>
                <strong>Customized Solutions:</strong>
                <p>Tailored staffing solutions for your needs</p>
              </li>
              <li>
                <strong>Dedicated Support:</strong>
                <p>Long-term partnership and relationship</p>
              </li>
              <li>
                <strong>Proven Results:</strong>
                <p>Track record of successful placements</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-section">
        <div className="locations-container">
          <SectionTitle
            title="Our"
            highlightWord="Offices"
            subtitle="We have offices in major cities to serve you better"
          />

          <div className="locations-grid">
            <div className="location-card">
              <h4>North Office</h4>
              <p>North Building</p>
              <p>123 Business Ave</p>
              <p>City, State 12345</p>
              <p className="location-contact">Tel: +1 (555) 123-4567</p>
            </div>

            <div className="location-card">
              <h4>South Office</h4>
              <p>South Tower</p>
              <p>456 Commerce St</p>
              <p>City, State 67890</p>
              <p className="location-contact">Tel: +1 (555) 234-5678</p>
            </div>

            <div className="location-card">
              <h4>East Office</h4>
              <p>East Plaza</p>
              <p>789 Enterprise Dr</p>
              <p>City, State 34567</p>
              <p className="location-contact">Tel: +1 (555) 345-6789</p>
            </div>

            <div className="location-card">
              <h4>West Office</h4>
              <p>West Center</p>
              <p>321 Industry Ln</p>
              <p>City, State 89012</p>
              <p className="location-contact">Tel: +1 (555) 456-7890</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-cta-section">
        <div className="contact-cta-container">
          <h2>Let's Build Your Success Story</h2>
          <p>Connect with our team today and discover how INNOV can transform your workforce</p>
          <button className="btn btn-primary">Schedule a Consultation</button>
        </div>
      </section>
    </div>
  )
}

export default Contact
