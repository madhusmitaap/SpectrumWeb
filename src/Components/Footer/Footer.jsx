import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CONTACT</h3>
            <p>Email: dev.spectrum.cetb@gmail.com</p>
  
            
          
         
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FaTwitter size={19} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <FaFacebook size={19} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={19} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; SPECTRUM CLUB OUTR-B All rights reserved.</p>
        </div>
       </div>
      
      
    </footer>
  );
}

export default Footer;
