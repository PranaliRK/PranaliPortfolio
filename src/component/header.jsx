// header.js
import React from 'react';
import Footer from './footer';
import './header.css';

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <h1 className='heading'>PRANALI KALE</h1>
        <h3>WEB DEVELOPER</h3>
        <button className="contact">CONTACT</button>
      </header>
    </div>
  );
};

export default Header;
