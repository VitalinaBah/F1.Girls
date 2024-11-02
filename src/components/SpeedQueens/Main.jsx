import React, { useRef } from "react";

import Header from "../Header/Header";
import styles from './Main.css';

const Main = () => {
  const infoSectionReference = useRef(null);
  const professionalsSectionReference = useRef(null);

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
            Meet the trailblazing women who are making waves in the world of Formula1. From top drivers to the talented female professionals behind the scenes, discover the stories of those who contribute significantly to the sport`s success. Celebrate their achievements and learn about their journey in the high-octane environment of F1.
          </p>
          <button className={styles.learnMoreButton} onClick={handleScrollToSection}>Learn More</button>
        </div>
      </div>
      <div ref={infoSectionReference} className={styles.infoSection}>
        <h2>Female drivers in F1 history</h2>
        <ol>
          <li><strong>Maria Teresa de Filippis (1958-1959)</strong><br />
          Maria Teresa de Filippis was the first woman to compete in Formula 1. The Italian driver made her debut in 1958, driving a Maserati in the Belgian Grand Prix. Although her F1 career was brief, with only five entries and three race starts, she broke the glass ceiling, becoming a pioneer for women in motorsport. Her best finish was 10th place in the 1958 Belgian Grand Prix. Despite facing skepticism from her male counterparts, de Filippis paved the way for future generations.
          </li>
          <br></br>
          <li><strong>Lella Lombardi (1974-1976)</strong><br />
          Lella Lombardi remains the only woman in F1 history to score points in a World Championship race. Hailing from Italy, she competed in 17 Grand Prix events from 1974 to 1976. Her most notable achievement was finishing 6th in the shortened 1975 Spanish Grand Prix, which earned her half a point under the F1 scoring system. Lombardi`s resilience and determination made her an inspiration, and her half-point remains a symbol of her trailblazing spirit.
          </li>
          <br></br>
          <li><strong>Desiré Wilson (1980)</strong><br />
          Desiré Wilson from South Africa remains the only woman to win an F1 race, albeit a non-championship event. In 1980, she won a round of the British Aurora F1 Championship at Brands Hatch. She entered a World Championship event in 1980, attempting to qualify for the British Grand Prix, but narrowly missed the grid. Wilson`s victory in the Aurora series remains a milestone, and her achievement is a symbol of triumph over adversity.
          </li>
          <br></br>
          <li><strong>Giovanna Amati (1992)</strong><br />
          Giovanna Amati was the last woman to attempt to compete in Formula 1. The Italian driver tried to qualify for three Grands Prix in 1992 with the Brabham team but was unsuccessful. Despite never making it into a race, Amati`s attempts were significant as she was the first woman in over a decade to try to qualify, highlighting the continued challenges women face in reaching F1`s top tier.
          </li>
        </ol>
      </div>
      <div ref={professionalsSectionReference} className={styles.professionalsSection}>
        <h2>Female Professionals Behind the Scenes</h2>
        <div className={styles.professionalsList}>
          <div className={styles.professionalCard}>
            <h3>Monisha Kaltenborn</h3>
            <h4>Team Principal</h4>
            <p>Monisha Kaltenborn broke barriers by becoming the first female team principal in Formula 1. Born in India and raised in Austria, she joined Sauber in 2000 and became team principal in 2012. Kaltenborn managed the team through significant transitions, including ownership changes and regulatory challenges, showcasing her resilience and expertise in the highly competitive environment of F1.
            </p>
          </div>
          <div className={styles.professionalCard}>
            <h3>Claire Williams</h3>
            <h4>Deputy Team Principal of Williams F1</h4>
            <p>Claire Williams played a pivotal role in shaping the modern Williams Racing team. As the daughter of Sir Frank Williams, Claire began her career in the communications department and worked her way up to become Deputy Team Principal. From 2013 to 2020, she was one of the highest-profile women in F1 management. Her leadership helped maintain the team’s independent legacy during challenging financial times, solidifying her status as a key figure in the sport’s history.</p>
          </div>
          <div className={styles.professionalCard}>
            <h3>Ruth Buscombe</h3>
            <h4>Race Strategy Engineer</h4>
            <p>Ruth Buscombe is a respected race strategy engineer who has worked with multiple F1 teams, including Haas and Alfa Romeo. She is known for her analytical mind and strategic insight that contributes to on-track decisions that can make or break a race. Her ability to make split-second calls under pressure has been a vital part of her teams` successes and exemplifies the importance of women in technical and strategic roles within motorsport.
            </p>
          </div>
          <div className={styles.professionalCard}>
            <h3>Hannah Schmitz</h3>
            <h4>Senior Strategy Engineer</h4>
            <p>Hannah Schmitz is a senior strategy engineer at Red Bull Racing and one of the prominent female figures in race strategy. She gained widespread recognition for her critical strategic decisions that led to race victories, showcasing her sharp analytical skills and deep understanding of race dynamics. Her work behind the scenes has been instrumental in helping the team secure championship points and win races.
            </p>
          </div>
          <div className={styles.professionalCard}>
            <h3>Silvia Hoffer Frangipane</h3>
            <h4>Head of Communications</h4>
            <p>Silvia Hoffer Frangipane has held senior communication roles within teams like Ferrari and Renault (now Alpine). As Head of Communications, she has been responsible for crafting and managing the public image of some of the most iconic brands in the sport. Her expertise in media relations, strategic messaging, and brand management has been essential in maintaining team reputations and fostering positive public engagement.</p>
          </div>
          <div className={styles.professionalCard}>
            <h3>Susie Wolff</h3>
            <h4>Managing Director and Former Development Driver</h4>
            <p>Susie Wolff began her motorsport career as a racing driver and became a test and development driver for the Williams F1 team from 2012 to 2015. She broke new ground by participating in free practice sessions at Grand Prix weekends, becoming the first woman to do so in over 20 years. After her driving career, Susie transitioned to management, becoming the Team Principal of Venturi Racing in Formula E and later the Managing Director of the F1 Academy, advocating for more female participation in motorsport. Her multifaceted career has made her a role model and an influential figure in promoting gender diversity in racing.</p>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Main;
