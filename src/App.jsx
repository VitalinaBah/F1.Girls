import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Discover from '../src/pages/Discover';
import Home from '../src/pages/Home'; 
import SignUp from '../src/pages/Sign up'; 
import SpeedQueens from '../src/pages/Speed queens';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/speedQueens" element={<SpeedQueens />} />
      </Routes>
    </Router>
  );
}

export default App;
