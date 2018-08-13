import React, { Component } from "react";
import RepSignup from "./rep-signup";
import StoreSignup from "./store-signup";
import Navbar from "./navbar";
import Footer from "./footer";

export default class HomePage extends Component {
	render() {
		return (
			<div className="homepage">
				<Navbar />
				<h1>Welcome!</h1>
				<p>This is Nutshell. We do cool stuff. </p>
				<div className="sign-up-container">
					<div className="sign-up-field">
						<RepSignup />
					</div>
					<div className="sign-up-field">
						<StoreSignup />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
