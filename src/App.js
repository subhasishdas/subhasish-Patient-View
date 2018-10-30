import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import DocSearch from './pages/DocSearch.jsx';
import Appointment from './pages/Appointmentbooked.jsx';
import SignIn from './pages/SignIn.js';
import Register from './pages/Register.js';
import DocCard from './pages/CardExampleCard.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SignIn}/>
          <Route  path="/about" component={About}/>
          <Route path="/home" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/DocSearch" component={DocSearch}/>
          <Route path="/appointmentbooked" component={Appointment}/>
          <Route exact path="/SignIn" component={SignIn}/>
          <Route path="/Register" component={Register}/>
          <Route path="/DocCard" component={DocCard}/>
        </div>
      </Router>
    );
  }
}

export default App;
