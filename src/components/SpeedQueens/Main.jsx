import React from "react";

import Header from "../Header/Header";
import styles from './Main.css';

const Main = () => {
    return (
      <div>
        <Header />
        <div className={styles.mainContainer}>
          <div>
            <h1 className={styles.title}>Speed Queens</h1>
          </div>
          <div className={styles.context}>
            <p>Meet the trailblazing women who are making waves in the world of Formula1. From top drivers to the talented female professionals behind the scenes, discover the stories of those who contribute significantly to the sport`s success. Celebrate their achievements and learn about their journey in the high-octane environment of F1.</p>
            <button className={styles.learnMoreButton}>Learn More</button>
          </div>
        </div>
        
          
        
      </div>
    );
};

export default Main;
