import React, { Component } from "react";
import Search from "../search";

export default class RepForm extends Component {
	render() {
		return (
			<div className="rep-form-container">
				<h1>Sales Rep Form</h1>
				<Search />
			</div>
		);
	}
}
