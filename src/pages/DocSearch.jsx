import React, { Component } from 'react';
import './DocSearch.css';
import CardSum from './cardSum.js';
import TimeDate from './timedate.js';
import DocDetails from './docdetails.js';
import RatingDetails from './ratingdetails.js';

import {  DateInput,  TimeInput,  DateTimeInput,  DatesRangeInput} from 'semantic-ui-calendar-react';
import 'semantic-ui-css/semantic.min.css';
import { Segment } from 'semantic-ui-react';

class DocSearch extends Component {

  render() {
  return (
    <div className="bg">
    <div className="margin">
     <Segment.Group horizontal>
     <Segment floated='left'>
      <DocDetails/>
       </Segment>
       <Segment floated='right' >
       <CardSum/>
       </Segment>
      </Segment.Group>
      <hr/>
       <div>
       <RatingDetails/>
    </div>
       </div>
    </div>
  );
}
}

export default DocSearch;
