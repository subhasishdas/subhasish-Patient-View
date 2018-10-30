import React, { Component } from 'react';
import './Appointmentbooked.css';
import greentick from './greentick.png';
class Appointmentbooked extends Component{
  render(){
    return(
      <div className="bg1">
      <img src={greentick} className="im1"/>
      <h2 > Appointment Booked Successfully!</h2>
</div>
    );
  }
}
export default Appointmentbooked;
