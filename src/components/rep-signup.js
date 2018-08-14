import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class RepSignup extends Component {
	render() {
		return (
			<div className="sign-up-field">
				<h1>Start as a Vendor</h1>
				<NavLink className={""} activeClassName={"activeNavlink"} to="/stores">
					<button>Search for Businesses</button>
				</NavLink>
				<div>
					Sign Up for Beta: <input placeholder="email@email.com" />
					<input type="submit" value="Sign Up" />
				</div>
			</div>
		);
	}
}
