import React from 'react';

import styles from './Header.css';

// function Header() {};
const Header = () => (
    <header className={styles.container}>
        <div>
            <h1 className="header">F1.Girls</h1>
            <p>Welcome</p>
        </div>
    </header>
);

export default Header;