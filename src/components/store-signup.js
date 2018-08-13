import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class StoreSignup extends Component {
	render() {
		return (
			<div className="rep-form-container">
				<h1>Sign up as a Business Owner</h1>
				<NavLink to="/setup-my-store">
					<button type="submit">Let's Do This</button>
				</NavLink>
			</div>
		);
	}
}
