import React, { Component } from 'react';

import './Navbar.css';
import { Button } from 'semantic-ui-react';
import { Redirect,Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

class Navbar extends Component {
  render() {
    return (
      <div className="right">

<Button color='teal'><Link className="fon" to="/DocCard"> Doctors</Link></Button>
<Button color='teal'><Link className="fon" to="/home">Home</Link></Button>
<Button color='teal'><Link className="fon" to="/about">About</Link></Button>
<Button color='teal'><Link className="fon" to="/SignIn">Log Out</Link></Button>

</div>
    );
  }
}

export default Navbar;
