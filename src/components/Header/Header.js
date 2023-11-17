import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>Fake BD</h1>
      </div>
      <div className="nav-menu">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contuct</a>
        <a href="/">Sale</a>
        <a href="/">Author</a>
      </div>
    </nav>
  );
};

export default Header;
