import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<div className="link">
					<NavLink className={"navlink"} to="/">
						Home
					</NavLink>
				</div>
				<div className="link">
					<NavLink className={"navlink"} to="/gallery">
						Gallery
					</NavLink>
				</div>
				<div className="link">
					<NavLink className={"navlink"} to="/resume">
						Resume
					</NavLink>
				</div>
			</div>
		);
	}
}
