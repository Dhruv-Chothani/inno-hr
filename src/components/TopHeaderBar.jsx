import React from 'react';
import { MapPin, HeadphonesIcon, LogIn, Users } from 'lucide-react';
import './TopHeaderBar.css';

const TopHeaderBar = () => {
  return (
    <div className="top-header-bar">
      <div className="top-header-menu">
        {/* Request Talent - Pill style */}
        <button className="request-talent-btn">
          <Users className="icon" />
          <span className="full-text">Request Talent</span>
          <span className="short-text">Talent</span>
        </button>

        {/* Office Locations */}
        <a href="/contact" className="top-header-link">
          <MapPin className="icon" />
          <span className="full-text">Office Locations</span>
          <span className="short-text">Locations</span>
        </a>

        {/* Associate Support */}
        <a href="/contact" className="top-header-link">
          <HeadphonesIcon className="icon" />
          <span className="full-text">Associate Support</span>
          <span className="short-text">Support</span>
        </a>

        {/* Associate Login - Yellow highlight */}
        <a href="#" className="top-header-link associate-login">
          <LogIn className="icon" />
          <span className="full-text">Associate Login</span>
          <span className="short-text">Login</span>
        </a>
      </div>

      {/* Mobile view - simplified */}
      <div className="mobile-only">
        <a href="#" className="top-header-link associate-login">
          <LogIn className="icon" />
          <span>Login</span>
        </a>
      </div>
    </div>
  );
};

export default TopHeaderBar;
