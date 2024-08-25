import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: sahoolagnajit1@gmail.com</p>
            <p>Phone: +91 6372761561</p>
            
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter size={19} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <FaFacebook size={19} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={19} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SPECTRUM All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
