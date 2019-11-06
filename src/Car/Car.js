import React, { Component } from 'react';
import './Car.css';

/**
 * Your task:
 * When the user chooses a color from the list,
 * you should change the element `Car-color` background color accordingly.
 */

class Car extends Component {
	constructor(props) {
		super(props);
		this.state = {
			CarColor: "",
			silver: "",
			red: "",
			blue: "",
			yellow: "",
			green: ""
		};
	  }

	  HandleChange(e){
		this.setState({
			CarColor: e.target.value
		  });
	  }

	  ChangeColor(e){
		this.setState({
			silver: e.target.value,
			red: e.target.value,
			blue: e.target.value,
			yellow: e.target.value,
			green: e.target.value
		  });
	  }

	render() {
		// let colorChange = option.value("red") = style.color("red")
		return (
			<div>
				<h1>Choose a color for your car:</h1>
				<select value={this.state.CarColor} onChange={this.HandleChange.bind(this)}>
					<option value="silver">silver</option>
					<option value="red">red</option>
					<option value="blue">blue</option>
					<option value="yellow">yellow</option>
					<option value="green">green</option>
				</select>
				<br />
				<br />
				<div className="Car-color" style={{backgroundColor: `${this.state.CarColor}`}}></div>
			</div>
		);
	}
}

export default Car;