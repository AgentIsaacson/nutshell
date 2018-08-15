import React, { Component } from "react";

export default class StoreSurvey extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		console.log("trying to handle submit");
		fetch("/survey", {
			method: "POST",
			body: data
		});
	}

	render() {
		return (
			<div className="">
				<form onSubmit={this.handleSubmit}>
					<input id="name" required/>
					<label htmlFor="name">Name:</label>
					<input id="company" required/>
					<label htmlFor="company">Company:</label>
					<input id="city" />
					<label htmlFor="city">City/Town:</label>
					<input id="state" />
					<label htmlFor="state">State/Provience:</label>
					<input id="email" required/>
					<label htmlFor="email">Email Address:</label>
					<input id="phone" required/>
					<label htmlFor="phone">Phone Number:</label>
					<div>
						<input name="business-time" type="radio" />
						Less than a year
						<input name="business-time" type="radio" />
						1-5 years
						<input name="business-time" type="radio" />
						5-10 years
						<input name="business-time" type="radio" />
						10+ years
					</div>
					<button>Send Data!</button>
				</form>
			</div>
		);
	}
}

// const inputData = [
// 	{id: 1,
// 		title: "First, let me know how I can reach you.",
// 		type: "input",
// 		data: [
// 			{ title: "Name", state: this.state.name, name: "name" },
// 			{ title: "Company", state: this.state.company, name: "company" },
// 			{ title: "City/Town", state: this.state.city, name: "city" },
// 			{ title: "State/Provience", state: this.state.state, name: "state" },
// 			{ title: "Email Address", state: this.state.email, name: "email" },
// 			{ title: "Phone Number", state: this.state.phone, name: "phone" }
// 		]
// 	},
// 	{id: 2,
// 		title: "How long has your company been in business?",
// 		type: "radio",
// 		data: [
// 			{ title: "Less than a Year", state: this.state.new, name: "new" },
// 			{ title: "1 - 5 years", state: this.state.short, name: "short" },
// 			{ title: "5 - 10 years", state: this.state.medium, name: "medium" },
// 			{ title: "State/Provience", state: this.state.long, name: "long" }
// 		]
// 	},
// 	{id: 3,
// 		title: "What sets you apart from you competitors?",
// 		data: [
// 			{ title: "", state: this.state.setApart, name: "setApart" }
// 		]
// 	}
// ];
