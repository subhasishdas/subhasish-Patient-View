import React, { Component } from 'react';
import './CardExampleCard.css';
// import { render } from "react-dom";
import { Redirect,Link } from 'react-router-dom';
// import { Card, Icon, Image } from 'semantic-ui-react';
import { Card, Icon, Image, Rating,Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import StarRatingComponent from 'react-star-rating-component';
import im from '../images/praveena.jpg'
import im1 from '../images/bhaskar1.jpg'

class CardExampleCard extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
  render() {
    // const description = [
    // 'Amy is a violinist with 2 years experience in the wedding industry.',
    // 'She enjoys the outdoors and currently resides in upstate New York.',
    // ].join(' ');
    const { rating } = this.state;
    return (
      <div className="bck">
      <div className="Cardcss1">
    <Card >
    <Image src={im1} />
    <Card.Content>
      <Card.Header>Dr.Bhaskar S</Card.Header>
      <Rating icon='heart' defaultRating={4} maxRating={5}  />
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>25 Years of experience<br/>
English,Hindi,Telugu,Tamil,Bengali,Kannada<br/>
710 Recommendations</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Patients Visited
      </a>
      <br/>
      <br/>
      <Button color='green'><Link className="fon1" to="/DocSearch"> Click Here</Link></Button>
    </Card.Content>
  </Card>
  </div>
  <div className="Cardcss1">
  <Card >
    <Image src={im} />
    <Card.Content>
      <Card.Header>Dr Praveena Shekar T</Card.Header>
      <Rating icon='heart' defaultRating={3} maxRating={5} disabled/>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>10 Years of experience.<br/>
English,Tamil.<br/>
100 Recommendations</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        15 Patients Visited
      </a>
      <br/>
      <br/>
      <Button color='green'><Link className="fon1" to="/DocSearch"> Click Here</Link></Button>
    </Card.Content>
  </Card>
</div>
</div>
    );
  }
}
export default CardExampleCard;
