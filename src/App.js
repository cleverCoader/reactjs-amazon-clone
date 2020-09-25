import React from 'react';
import './App.css';
//--------------------------------------
import Header from './Header';
import Header2 from './Header2';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1> checkout page</h1>
          </Route>
          <Route path="/login">
            <h1> login page</h1>
          </Route>
          <Route path="/">
            <div className="headers">
            <Header />
            <Header2 />
            </div>
            <Home />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
