import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>INNOV</h3>
          <p>Leading staffing and HR solutions for modern businesses.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#staffing">Staffing Solutions</a></li>
            <li><a href="#recruitment">Recruitment</a></li>
            <li><a href="#hr">HR Management</a></li>
            <li><a href="#consulting">Consulting</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Email: info@innov.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Business Ave, City, State</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} INNOV. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
