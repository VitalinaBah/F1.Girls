import React from 'react';

import styles from '../App.css';
import Main from '../components/SpeedQueens/Main';

const SpeedQueens = () => {
    return (
        <>
        <div className={styles.mainContainer}>
            <Main/>
        </div>
        </>
    );
};

export default SpeedQueens;