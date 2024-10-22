import React from 'react';

// import resizeHook from '@hooks/resize';
// import styles from './App.css';
// import * as styles from './App.css';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div>
            <Header />
            <div id="tabs">
                <menu>
                    <button id="btn-why-react" className="active">
                        Hello?
                    </button>
                </menu>
                <div id="tab-content"></div>
            </div>
        </div>
    );
};


export default App;