import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CurrentStateForm from './components/CurrentStateForm';
import DigitalStrategy from './components/DigitalStrategy';
import './App.css';

const Home = () => {
  return (
   <div className="app bg-hero-pattern bg-cover bg-center min-h-screen">
      <DigitalStrategy />
    </div>
  );
};
const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/current-state-form" element={<CurrentStateForm />} />
          </Routes>
    </Router>
  );
};
export default App;
