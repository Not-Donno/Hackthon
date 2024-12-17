import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, AboutTeam, TeamMember } from './pages/index';
import Problem from './pages/Problem';
import Goal from './pages/Goal';
import Solution from './pages/Solution';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <main>
      <Router>
        <Navbar className=" sticky top-0 left-0 bg-white"/>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/TeamMember" element={<TeamMember />} />
            <Route path="/AboutTeam" element={<AboutTeam />} />
            <Route path="/Problems" element={<Problem />} />
            <Route path="/OurGoal" element={<Goal />} />
            <Route path="/Solution" element={<Solution />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </main>
  );
};

export default App;
