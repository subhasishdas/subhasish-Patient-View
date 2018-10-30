import React, { Component } from 'react';
import './Contact.css';
import user from './user.png';
import { Input } from 'semantic-ui-react';
class Contact extends Component {
  render() {
    return (
      <div className="bg1">
      <img src={user} className="im1"/>
      <Input
      label={{ basic: true, content: '@ICare.com' }}
      labelPosition='right'
      placeholder='Enter Email...'
    />
    <div className="bb">
    <input type="password" defaultValue="FakePSW" id="myInput" /></div>
</div>
    );
  }
}

export default Contact;
