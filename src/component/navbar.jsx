// navbar.js
import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's preference in localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    // Toggle theme and update localStorage
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <div id='div1'>
        <ul>
          <li className='li1'><b>PK</b></li>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>  
        </ul>
      </div>
      <div id='div2'>
        
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
     
      <button className="toggle-button" onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
