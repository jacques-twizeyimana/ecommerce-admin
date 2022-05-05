import './App.css';

import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import ShowCase from './pages/__test/Showcase';
import Signin from './pages/auth/Signin';
import ForgotPassword from './pages/auth/ForgotPassword';
import Employees from './pages/employees';
import EmployeeDetails from './pages/employees/EmployeeDetails';
import PageNotFound from './pages/404';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        

        {/* dashboard */}
        <Route path="dashboard" element={<MainLayout />}>
          <Route path="employees" element={<Employees />} />
          <Route path="employees/:id" element={<EmployeeDetails />} />
        </Route>
        {/* <Route path="/usage" element={<ShowCase />} /> */}
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
};
export default App;
