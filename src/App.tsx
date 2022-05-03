import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signin from './pages/auth/Signin'

const App = () => {
    return (
      <Router>
        <Switch>
            <Route exact path="/login" component={Signin} />
        </Switch>
      </Router>
    )
}
export default App
