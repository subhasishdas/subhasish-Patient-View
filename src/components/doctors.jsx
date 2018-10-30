import React, { Component } from 'react';
import Select from 'react-select';
const options = [
	{
		label: 'Top Doctors', options: [
			{ label: 'Subhasish', value: 'Dr.Subhasish' },
			{ label: 'Subhadip', value: 'Dr.Subhadip' },
			{ label: 'Rupa', value: 'Dr.Rupa' },
      { label: 'Jyotirmoy', value: 'Dr.Jyotirmoy' }
		]
	},
	{
		label: 'Other Doctors', options: [
			{ label: 'Aurin', value: 'Dr.Aurin' },
      { label: 'Rina', value: 'Dr.Rina' },
      { label: 'Anamitra', value: 'Dr.Anamitra' },
      { label: 'Praloy', value: 'Dr.Praloy' },
      { label: 'Rumki', value: 'Dr.Rumki' },
      { label: 'Suprakash', value: 'Dr.Suprakash' },
      { label: 'Rama', value: 'Dr.Rama' }
		]
	},
];

class doctors extends Component {
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
export default doctors;
