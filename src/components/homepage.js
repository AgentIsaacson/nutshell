import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HomePage extends Component {
	render() {
		return (
			<div className="homepage">
				<h1>Welcome!</h1>
				<p>This is Nutshell.</p>

				<div className="">
					<NavLink className={""} activeClassName={""} exact to="/rep-form">
						Rep form
					</NavLink>
				</div>
				<div className="">
					<NavLink className={""} activeClassName={""} exact to="/store-form">
						Store form
					</NavLink>
				</div>
			</div>
		);
	}
}
