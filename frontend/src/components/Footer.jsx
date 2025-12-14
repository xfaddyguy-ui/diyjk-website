import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <h3 className="footer-brand">DIY J&K</h3>
            <p className="footer-description">
              Your trusted source for car care, pressure washers, and detailing tools. 
              Honest reviews, expert tutorials, and quality products.
            </p>
            <div className="social-links">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="mailto:contact@diyjk.com" className="social-icon" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/products">Shop Products</Link></li>
              <li><Link to="/affiliate">Amazon Picks</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><Link to="/products?cat=pressure-washers">Pressure Washers</Link></li>
              <li><Link to="/products?cat=car-care">Car Care Products</Link></li>
              <li><Link to="/products?cat=vacuums">Vacuums</Link></li>
              <li><Link to="/products?cat=polishing">Polishing Tools</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about#contact">Contact</Link></li>
              <li><a href="mailto:contact@diyjk.com">contact@diyjk.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} DIY J&K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;