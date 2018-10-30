import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Carousel } from 'react-responsive-carousel';
import a1 from './rsz_2aboutpic4.jpg';
import a2 from './rsz_1aboutpic5.jpg';
import a3 from './rsz_aboutpic3.jpg';
import a4 from './rsz_aboutpic6.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './About.css';
class About extends Component {
  render() {
    return (
      <div className="back">
      <div className="mar">
      <Navbar/>
      <div className="Car">
      <Carousel autoPlay infiniteLoop='true' width='100%' showThumbs='false' >
              <div>
                  <img src={a1} />
                  <p className="Car">Legend 1</p>
              </div>
              <div>
                  <img src={a2} />
                  <p className="Car">Legend 2</p>
              </div>
              <div>
                  <img src={a3} />
                  <p className="Car">Legend 3</p>
              </div>
              <div>
                  <img src={a4} />
                  <p className="Car">Legend 4</p>
              </div>
          </Carousel>
          </div>
          <p>
          <h1>ABOUT ICARE HOSPITAL MANAGEMENT SYSTEM</h1>
          <h2>Developed by Subhasish Das.</h2>
          <div className="para">
          ICARE HOSPITAL MANAGEMENT SYSTEM offers the best in health care to patients who have come to trust the hospital as one of India’s best.
          A 1000-bed facility offering superlative treatment in 63 specialities, ICARE HOSPITAL MANAGEMENT SYSTEM proudly lays claim to a team of world-class
          professionals who use our state-of-the-art infrastructure and cutting-edge technology to heal and give hope to our patients.
          Consistently adjudged as a leader in healthcare, ICARE HOSPITAL MANAGEMENT SYSTEM attracts patients from 129 countries who seek our
          expertise in moving towards wellness.</div>
          </p>
        <Footer />
      </div>
      </div>
    );
  }
}

export default About;
