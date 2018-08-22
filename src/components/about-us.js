import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default class About extends Component {
	render() {
		return (
			<div className="about">
				<Navbar />
				<h1>About Us</h1>
				<p>This is the description of Nutshell. Content goes here</p>
				<Footer />
			</div>
		);
	}
}
