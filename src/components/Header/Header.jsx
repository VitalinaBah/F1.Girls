import React from 'react';
import { Link } from 'react-router-dom';

import Moon from '../../../assets/Darkmode.png'; 
import logo from '../../../assets/logo.png';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </div>
        <nav className={styles.nav}>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/discover">Discover</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
          <img src={Moon} alt="Dark mode icon" className={styles.themeToggle} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
