import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default class HomePage extends Component {
	render() {
		return (
			<div className="homepage">
				<Navbar />
				<div className="sign-up-container">
					home
				</div>
				<Footer />
			</div>
		);
	}
}
