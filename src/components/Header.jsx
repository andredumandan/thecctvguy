import React from 'react';
import hlogo from '../../public/h-logo.png';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={hlogo} alt='logo' />
      </div>
      <nav className='nav'>
        <ul>
          <li>Services</li>
          <li>About Us</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
