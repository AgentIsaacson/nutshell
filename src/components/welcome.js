import React, { Component } from "react";
import Checklist from "./checklist";

export default class Welome extends Component {
		render() {
		return (
			<div className="welcome">
				<div className="logo">
					<img src="/assets/logos\Nutshell-logos\2x\nutshell-logo-orange@2x.png" />
					<p>Your New Gatekeeper</p>
				</div>
				<div className="description">
					<h2>WHAT WE DO</h2>
					<ul>
						{Checklist("Screen sales reps", "so your staff doesn't have to")}
						{Checklist(
							"Summarize their pitch",
							"in a short, easy-to-read, standardized form"
						)}
						{Checklist("Compare their pitch", "to other vendors like them")}
						{Checklist("Reply to them", "based on your decision")}
						{Checklist("Store their info", "for the future")}
					</ul>
				</div>
			</div>
		);
	}
}
