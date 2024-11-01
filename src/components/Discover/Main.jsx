import React from "react";
import { Link } from 'react-router-dom';

import arrow from '../../../assets/arrow.png';
import Header from '../Header/Header';
import styles from './Main.css';

const Main = () => {
    return (
      <div>
        <Header /> 
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>Discover</h1>
        </div>
        <div><p className={styles.subtitle}>Learn about the powerful impact women are making in the world of F1</p></div>
        <div className={styles.redSection}>
          <div className={styles.redBlock}>
            <span className={styles.blockTitle}>Speed Queens</span> - Discover inspiring stories and the powerful contributions of remarkable women in Formula 1, where dedicated professionals shape the sport both on and off the track.
            <div className={styles.arrowContainer}> 
             <Link to="/speedQueens">
             <img src={arrow} alt="Arrow" className={styles.arrow} />
            </Link>
          </div>
          </div>
          <div className={styles.redBlock}>
            <span className={styles.blockTitle}>F1 Women Academy</span> - Discover the women shaping the future of Formula 1 through the F1 Women Academy, where you will find stories of emerging talent, and insights into this path for women in racing.
            <div className={styles.arrowContainer}> 
             <Link to="/speedQueens">
             <img src={arrow} alt="Arrow" className={styles.arrow} />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
    );
};

export default Main;
