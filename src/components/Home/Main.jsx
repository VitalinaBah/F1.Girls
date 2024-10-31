import React from "react";

import MainImg from '../../../assets/main.png';
import Header from '../Header/Header'
import styles from './Main.css';

const Main = () => {
    return (
      <div className={styles.main}>
        <Header/>
        <div className={styles.homePage}>
          <div className={styles.containerPage}>
          <div className={styles.leftContainer}>
            <h1>For girls with passion for speed</h1>
            <p>Join and discover the community of fierce women who live for the thrill of Formula 1</p>
            <button className={styles.joinButton}>Join us</button>
          </div>
          <div className={styles.rigthContainer}>
            <img src={MainImg} className={styles.imgStyles} alt="Main Visual" />
          </div>
        </div>
        </div>
      </div>
    );
};

export default Main;
