import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default class About extends Component {
	render() {
		return (
			<div className="about">
				<Navbar />
				<h1>About Us</h1>
				<p>Some Heckin sweet content about us cuz we're cool</p>
				<Footer />
			</div>
		);
	}
}
