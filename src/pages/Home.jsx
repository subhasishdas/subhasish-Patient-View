import React, { Component } from 'react';
import './Home.css';

import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {

  render() {

    return (

      <div className="back">
        <Navbar />
        <Jumbotron title="Welcome" subtitle="Search for Doctors and choose an appointment" />
<Footer />
      </div>
    
    );
  }
}

export default Home;
