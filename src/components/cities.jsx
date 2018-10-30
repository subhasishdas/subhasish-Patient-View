import React, { Component } from 'react';
import Select from 'react-select';
const options = [
	{
		label: 'Top Cities', options: [
			{ label: 'Bangalore', value: 'Bangalore' },
			{ label: 'Chennai', value: 'Chennai' },
			{ label: 'Delhi', value: 'Delhi' },
      { label: 'Kolkata', value: 'Kolkata' }
		]
	},
	{
		label: 'Other Cities', options: [
			{ label: 'Ahmedabad', value: 'Ahmedabad' },
      { label: 'Coimbatore', value: 'Coimbatore' },
      { label: 'Indore', value: 'Indore' },
      { label: 'Kanpur', value: 'Kanpur' },
      { label: 'Noida', value: 'Noida' },
      { label: 'Thane', value: 'Thane' },
      { label: 'Vishakapatnam', value: 'Vishakapatnam' }
		]
	},
];

class cities extends Component {
state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
  const { selectedOption } = this.state;
    return (
    <div><Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            isSearchable={true}
          /></div>
          );
}
}
export default cities;
