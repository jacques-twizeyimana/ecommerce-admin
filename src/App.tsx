import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Signin from './pages/auth/Signin'
import Employees from './pages/employees'

const App = () => {
    return (
      <Router>
        <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={Signin}/>
            <Route exact path="/employees" component={Employees}/>
        </Switch>
      </Router>
    )
}
export default App
