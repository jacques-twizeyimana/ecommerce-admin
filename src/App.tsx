import './App.css';

import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import ShowCase from './pages/__test/Showcase';
import Signin from './pages/auth/Signin';
import Employees from './pages/employees';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/employees" element={<Employees />} />

        <Route path="/usage" element={<ShowCase />} />
      </Routes>
    </Router>
  );
};
export default App;
