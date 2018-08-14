import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<div className="link">
					<NavLink className={"logo"} to="/">
						<img src="/assets/logos\Nutshell-logos\2x\nutshell-logo-orange@2x.png" />
						<p>Your New Gatekeeper</p>
					</NavLink>
				</div>
				<div className="link">
					<NavLink className={"navlink"} to="/">
						Home
					</NavLink>
				</div>
				<div className="link">
					<NavLink className={"navlink"} to="/stores">
						Stores
					</NavLink>
				</div>
				<div className="link">
					<NavLink className={"navlink"} to="/about-us">
						About Us
					</NavLink>
				</div>
				<div className="link">
					<NavLink className={"navlink"} to="/contact-us">
						Contact Us
					</NavLink>
				</div>
			</div>
		);
	}
}
