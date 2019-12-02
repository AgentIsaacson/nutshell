import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default class Resume extends Component {
	render() {
		return (
			<div className="resume">
				<Navbar />
				<div className="sign-up-container">
					resume
				</div>
				<Footer />
			</div>
		);
	}
}
