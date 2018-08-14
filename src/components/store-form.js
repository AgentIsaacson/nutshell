import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default class StoreForm extends Component {
	render() {
		return (
			<div className="">
				<Navbar />
				<div className="store-form">
					<h2>Setup My Store</h2>
					<label>Business Name:</label>
					<input />
					<label>Your Name:</label>
					<input />
					<label>Your email:</label>
					<input />
					<button>Submit</button>
				</div>
				<Footer />
			</div>
		);
	}
}
