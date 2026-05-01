import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">INNOV</span>
          </Link>
        </div>
        
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="cta-button">Get Started</button>
      </div>
    </header>
  )
}

export default Header
