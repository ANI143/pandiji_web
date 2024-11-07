import React from 'react';
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <nav>
         <div className="logo">
        <img src='img/logo_name.png' height={40} width={50} alt="Website Logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/contactus">Contact Us</a></li>
          <li><a href="/service">Service</a></li>
        </ul>
      </div>
     
    </nav>
  );
};

export default NavBar;
