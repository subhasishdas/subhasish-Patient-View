import React, { Component } from 'react';
import {  BrowserRouter as Router,Redirect,Route } from 'react-router-dom';
class Search extends Component {
  render() {
    return (
        <Router>
        <Route path="/DocSearch" components={DocSearch}/>
          </Router>
        );
        const DocSearch =()=>(
          <div>
            <h2>Click</h2>
          </div>
        );
      }
}

export default Search;
