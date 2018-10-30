import React, { Component } from 'react';
import './DocSearch.css';
import { Card, Icon, Image, Rating,Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import bhaskar from './bhaskar1.jpg';

class RatingDetails extends Component {

  render() {
    return (
      <div>
      <h2> 305 Reviews</h2>
       <Rating icon='heart' defaultRating={4} maxRating={5} disabled size='huge'/>

       <Segment.Group horizontal >
       <Segment><Image src={bhaskar} avatar size='tiny'/><span>Patient 1</span></Segment>
       <Segment padded='very'> <h4>Excellent doctor and treatment. The hospital is neat and clean. I loved it!!!</h4></Segment>
       </Segment.Group>


        <Segment.Group horizontal >
       <Segment><Image src={bhaskar} avatar size='tiny'/><span>Patient 2</span></Segment>
       <Segment padded='very'> <h4>Excellent doctor and treatment. The hospital is neat and clean. I loved it!!!</h4></Segment>
       </Segment.Group>


      </div>
    );
  }
}

export default RatingDetails;
