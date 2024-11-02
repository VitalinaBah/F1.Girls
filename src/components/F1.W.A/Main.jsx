import React from "react";

import Header from "../Header/Header";
import styles from './Main.css';

const Main = () => {
    return (
      <div>
        <Header />
        <div className={styles.mainContainer}>
          <div>
            <h1 className={styles.title}>F1 Women Academy</h1>
          </div>
          <div className={styles.context}>
            <p>Explore the F1 Women Academy, where the next generation of female talent is training to excel in motorsport. From drivers to engineers, these young women are breaking barriers and shaping the future of Formula 1 with their passion and determination</p>
            <div>
      {/* Anchor link */}
      <a href="https://en.wikipedia.org/wiki/F1_Academy">
      <button className={styles.learnMoreButton}>Learn More</button>
      </a>
    </div>
            
          </div>
        </div>
        
          
        
      </div>
    );
};

export default Main;
