import React, { Component } from "react";
import { Outline } from "./outline";

export default class JustAddChocolate extends Component {
	render() {
		return (
			<div className="chocolate-house-container">
				{Outline(
					"Just Add Chocolate",
					"Description",
				)}
				
			</div>
		);
	}
}
