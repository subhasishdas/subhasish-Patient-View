import React, { Component } from 'react';
import { Redirect,Link } from 'react-router-dom';
import './DocSearch.css';
import bhaskar from './bhaskar1.jpg';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Button, Container,Segment,Popup } from 'semantic-ui-react';
import Timedate1 from './timedate.js';

const extra = (
  <a>
    <Icon name='user' />
    16 Patients Visited
  </a>
)
class cardSum extends Component {
  render() {
    return (
    <Segment compact='true'>
      <Card
      color='	blue'
    image={bhaskar}
    header='Dr. Bhaskar S'
    meta='General Physician'
    description="Degree:  MD(INT MED); FRCP; FACP.
    Medical Council Registration: 37527"
    raised='true'

    extra={extra}
  />
  <Timedate1/>
<Button positive><Link className="font" to="/appointmentbooked">Book Appointment</Link></Button>

</Segment>
    );
  }
}

export default cardSum;
