import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">Header</div>
      <div className="header-menu">
        <Link to="/">Home</Link>
        <Link to="/contacto">Contact</Link>
      </div>
    </div>
  );
}

export default Header;