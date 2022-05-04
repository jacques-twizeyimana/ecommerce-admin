import './App.css';

import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Signin from './pages/auth/Signin';
import Employees from './pages/employees';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </Router>
  );
};
export default App;
