import React from "react";

import logo from '../../../assets/logo.png';
import styles from './Main.css';

const Main = () => {
    return (
      <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
      <div className={styles.logo}>
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </div>
        
        <input type="text" placeholder="Enter your name" className={styles.inputField} />
        <input type="email" placeholder="Enter your email" className={styles.inputField} />
        <input type="text" placeholder="Create a nickname" className={styles.inputField} />
        <input type="password" placeholder="Create a password" className={styles.inputField} />
        
        <select className={styles.inputField}>
          <option>Choose your team</option>
          <option>Ferrari</option>
          <option>Red Bull</option>
          <option>Mercedes</option>
          <option>Mclaren</option>
          <option>Williams</option>
          <option>Haas</option>
          <option>Alpine</option>
          <option>Racing Bulls</option>
          <option>Sauber</option>
        </select>
        
        <select className={styles.inputField}>
          <option>Choose your status</option>
          <option>Fan</option>
          <option>Member of F1 team</option>
          <option>Other</option>
        </select>

        <button className={styles.signUpButton}>Sign up</button>
      </div>
    </div>
       
    );
};

export default Main;
