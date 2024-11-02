import React, { useEffect, useRef, useState } from "react";

import { fetchSpeedQueensData } from "../../constantInfo/api";
import Header from "../Header/Header";
import styles from './Main.css';

const Main = () => {
  const [data, setData] = useState([]);
  const infoSectionReference = useRef(null);
  const professionalsSectionReference = useRef(null);

  useEffect(() => {
    fetchSpeedQueensData().then(fetchedData => setData(fetchedData));
  }, []);

  const handleScrollToSection = () => {
    infoSectionReference.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <div className={styles.mainContainer}>
        <div>
          <h1 className={styles.title}>Speed Queens</h1>
        </div>
        <div className={styles.context}>
          <p>
            Meet the trailblazing women who are making waves in the world of Formula1. From top drivers to the talented female professionals behind the scenes, discover the stories of those who contribute significantly to the sports success. Celebrate their achievements and learn about their journey in the high-octane environment of F1.
          </p>
          <button className={styles.learnMoreButton} onClick={handleScrollToSection}>Learn More</button>
        </div>
      </div>

      {data.map((section, index) => (
        <div
          key={index}
          ref={section.title === "Female drivers in F1 history" ? infoSectionReference : professionalsSectionReference}
          className={section.type === "section" ? styles.infoSection : styles.professionalsSection}
        >
          <h2>{section.title}</h2>
          {section.type === "section" && section.content[0].title ? (
            <ol className={styles.infoSectionOl}>
              {section.content.map((driver) => (
                <li key={driver.id}>
                  <strong>{driver.title}</strong>
                  <br />
                  {driver.text}
                </li>
              ))}
            </ol>
          ) : (
            <div className={styles.professionalsList}>
              {section.content.map((professional) => (
                <div key={professional.id} className={styles.professionalCard}>
                  <h3>{professional.name}</h3>
                  <h4>{professional.role}</h4>
                  <p>{professional.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Main;
