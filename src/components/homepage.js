import React, { Component } from "react";
import RepSignup from "./rep-signup";
import StoreSignup from "./store-signup";
import Navbar from "./navbar";
import Footer from "./footer";
import Welcome from "./welcome";

export default class HomePage extends Component {
	render() {
		return (
			<div className="homepage">
				<Navbar />
				<Welcome />
				<div className="sign-up-container">
					<RepSignup />
					<StoreSignup />
				</div>
				<Footer />
			</div>
		);
	}
}
