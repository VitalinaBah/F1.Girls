import React from "react";

// import Header from '../Header/Header';
import styles from './Main.css';

const Main = () => {
    return (
      <div>
        {/* <Header /> */}
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>Discover</h1>
        </div>
        
        <div className={styles.redSection}>
          <div className={styles.redBlock}>
            <span className={styles.blockTitle}>Speed Queens</span> - Your Gateway to Womens Impact in F1
            <span className={styles.arrow}>→</span>
          </div>
          <div className={styles.redBlock}>
            <span className={styles.blockTitle}>F1 Women Academy</span> - Discover the Women Shaping F1s Future
            <span className={styles.arrow}>→</span>
          </div>
        </div>
      </div>
      </div>
      
    );
};

export default Main;
