import React from 'react';

import styles from "../App.css";
import Main from '../components/Home/Main';

const Home = () => {
  return (
    <>
      <div className={styles.appContainer}>
        <Main/>
      </div>
    </>
  );
};

export default Home;