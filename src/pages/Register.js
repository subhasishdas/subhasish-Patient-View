import React,{Component} from 'react';
import { Redirect,Link } from 'react-router-dom';

import './Login.css';
import Footer from '../components/Footer.jsx';
class LogIn extends Component {
constructor(props){
  super(props);
this.state={
  email:'',
  pass:'',
  rpass:''
}
this.emailChange=this.emailChange.bind(this);
this.passChange=this.passChange.bind(this);
this.rPassChange=this.rPassChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
};
emailChange(e){
  this.setState({email:e.target.value});
}
passChange(e){
  this.setState({pass:e.target.value});
}
rPassChange(e) {

    this.setState({rpass:e.target.value});
  }
  handleSubmit(e){
    if(this.state.pass===this.state.rpass)
      {alert('Success');}
      else{
        alert('Passwords didnt match!!! ' + this.state.email);

      }
      e.preventDefault();
  }
  render() {

    return (
      <div>
      <div className="bck">

      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required onChange={this.emailChange} />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onChange={this.passChange}/>
          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required onChange={this.rPassChange}/>
          <hr />
          <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
          <button type="submit" className="registerbtn">Register</button>
          <div className="signin">
            Already have an account? <Link to="/SignIn">SignIn</Link>
          </div>
        </div>

      </form>

</div>
<Footer/></div>



    );
  }
}

export default LogIn;
