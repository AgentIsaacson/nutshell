import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<Navbar />
				<h1>Contact Us</h1>
				<p>email@emailgoeshere.com</p>
				<p>801-123-4567</p>
				<Footer />
			</div>
		);
	}
}
