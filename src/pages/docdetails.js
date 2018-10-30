import React, { Component } from 'react';
import './DocSearch.css';
import {  DateInput,  TimeInput,  DateTimeInput,  DatesRangeInput} from 'semantic-ui-calendar-react';
import 'semantic-ui-css/semantic.min.css';

class DocDetails extends Component {

  render() {
    return (
    	<div>
      <h2> Dr.Bhaskar S</h2>
      <h3>MD(INT MED); FRCP; FACP</h3><br/>
      General Physician<br/>
<h3>Apollo Hospitals Greams Road Chennai.</h3><br/>
25 Years of experience.<br/>
English,Hindi,Telugu,Tamil,Bengali,Kannada<br/>
710 Recommendations<br/>
MON-SAT | 08:00 AM-01:45 PM, 01:45 PM-07:45 PM<br/>
<h3>Research and Publications</h3><br/>
International and National Publication more than 30<br/>
<h3>Qualification</h3><br/>
MD(INT MED); FRCP; FACP<br/>
<h3>Work Experience</h3><br/>
Working in Apollo Hospitals since last Assignment<br/>
<h3>Certifications & Professional Memberships</h3><br/>
API<br/>
Fellow Royal College London, Edinburgh, Glascow,<br/>
American College of physicians<br/>
IMA<br/>
<h3>Medical Council Registration</h3><br/>
37527<br/>
</div>
    );
  }
}

export default DocDetails;
