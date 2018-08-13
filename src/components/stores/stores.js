import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar";

export default class Stores extends Component {
	render() {
		return (
			<div className="stores">
				<Navbar />
				<h2>Here's our list of Stores</h2>
				<div className="">
					<NavLink
						className={""}
						activeClassName={"activeNavlink"}
						exact
						to="/stores/chocolatehouse"
					>
					<img src="/assets/logos/chocolate_house_logo.png" alt="The Chocolate House Logo"/>
					</NavLink>
				</div>
				<div className="">
					<NavLink
						className={""}
						activeClassName={"activeNavlink"}
						exact
						to="/stores/just-add-chocolate"
					>
					<img src="/assets/logos/just_add_chocolate.jpg" alt="Just Add Chocolate Logo"/>
					</NavLink>
				</div>
			</div>
		);
	}
}
