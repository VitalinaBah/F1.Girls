import React from 'react';
import { HashRouter as Router, Route,Routes } from "react-router-dom";

import Discover from '../src/pages/Discover';
import F1WA from '../src/pages/F1 W.A';
import Home from '../src/pages/Home'; 
import SignUp from '../src/pages/Sign up'; 
import SpeedQueens from '../src/pages/Speed queens';
import ProtectedRoute from './firebase/ProtectedRoute';
import useAuth from "./hooks/useAuth.js";

function App() {
  const isAuthenticated = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/discover" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Discover /></ProtectedRoute>} />
        <Route path="/speedQueens" element={<SpeedQueens />} />
        <Route path="/f1wa" element={<F1WA />} />
      </Routes>
    </Router>
  );
}

export default App;
