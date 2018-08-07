import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Search extends Component {
	render() {
		return (
			<div className="search">
				<div className="">
					<NavLink
						className={""}
						activeClassName={"activeNavlink"}
						exact
						to="/stores/spacescape"
					>
						Spacescape
					</NavLink>
				</div>
				<div className="">
					<NavLink
						className={""}
						activeClassName={"activeNavlink"}
						exact
						to="/stores/coolness"
					>
						Coolness.io
					</NavLink>
				</div>
			</div>
		);
	}
}
