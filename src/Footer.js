import React from 'react';
import footerLogo from './footerLogo.svg';
import './Footer.css';

function Footer() {
  return (
    <div className="App">
      <footer className="App-footer">
        <img src={footerLogo} className="Logo" alt="Logo"/>
        <ul className="Footer-nav">
          <a href="#" className="App-link">
            <li>Home</li>
          </a>
          <a href="#" className="App-link">
            <li>About Us</li>
          </a>
          <a href="#" className="App-link">
            <li>Contact</li>
          </a>
          <a href="#" className="App-link">
            <li>Login / Signup</li>
          </a>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
