import React, { Component } from "react";
import { Outline } from "./outline";

export default class ChocolateHouse extends Component {
	render() {
		return (
			<div className="chocolate-house-container">
				{Outline(
					"The Chocolate House",
					"Description",
					"https://www.surveymonkey.com/r/25X8RLJ"
				)}
				
			</div>
		);
	}
}
