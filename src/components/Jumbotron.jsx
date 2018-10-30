import React, { Component } from 'react';
import './Jumbotron.css';
import Select from 'react-select';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import { Redirect,Link } from 'react-router-dom';

import Cities from '../components/cities.jsx';
import Doctors from '../components/doctors.jsx';




class Jumbotron extends Component {

  render() {
    return (
      <div className="jumbotron ">

          <h1 className="display-3">{this.props.title}</h1>
          <p className="lead">{this.props.subtitle}</p>
          <br/><br/><br/>
<div className="cen">
          <div className="left-col">
          <Cities/>
</div>
<div className="center-col">
          <Doctors/>

</div>
<div className="right-col">
          <Button positive><Link className="font" to="/DocSearch">DocSearch</Link></Button>
          </div>

</div>
        </div>

    );
  }
}

export default Jumbotron;
