import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/Nav.css';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`burger-menu ${menuOpen ? 'menu-open' : ''}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {menuOpen && (
        <div className="menu-links">
          <Link to="/about">Acerca de</Link>
          <Link to="/repositorios">Repositorios</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;