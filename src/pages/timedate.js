import {  DateInput,  TimeInput,  DateTimeInput,  DatesRangeInput} from 'semantic-ui-calendar-react';
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
class timedate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time: '',
      dateTime: '',
      datesRange: ''
    };
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });

    }
    console.log(name);
    console.log(value);
  }

  render() {
    return (
        <DateTimeInput inline
          name="DateTime"
          placeholder="Date Time"
          value={this.state.dateTime}
          iconPosition="left"
          onChange={this.handleChange} />

    );
  }
}
export default timedate;
