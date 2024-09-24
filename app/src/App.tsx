import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
// Import other page components as needed

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;