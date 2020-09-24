import React from 'react';
import './App.css';
//--------------------------------------
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <h1> checkout page</h1>
          </Route>
          <Route path="/login">
            <h1> login page</h1>
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
