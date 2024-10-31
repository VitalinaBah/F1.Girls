import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Discover from '../src/pages/Discover';
import Home from '../src/pages/Home'; 
import SignUp from '../src/pages/Sign up'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </Router>
  );
}

export default App;
