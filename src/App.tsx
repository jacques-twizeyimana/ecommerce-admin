import './App.css';

import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import ShowCase from './pages/__test/Showcase';
import Signin from './pages/auth/Signin';
import Employees from './pages/employees';
import EmployeeDetails from './pages/employees/EmployeeDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Signin />} />

        {/* dashboard */}
        <Route path="dashboard" element={<MainLayout />}>
          <Route path="employees" element={<Employees />} />
          <Route path="employees/:id" element={<EmployeeDetails />} />
        </Route>

        <Route path="/usage" element={<ShowCase />} />
      </Routes>
    </Router>
  );
};
export default App;
