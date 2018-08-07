import React from "react";
import { NavLink } from "react-router-dom";

export default function() {
	return (
		<div className="navbar">
			<div className="link">
				<NavLink className={"logo"} exact to="/">
					<span><img src="D:\Nutshell\code\logos\Nutshell-logos\2x\nutshell-logo-orange@2x.png"/></span>
				</NavLink>
			</div>
			<div className="link">
				<NavLink className={"navlink"} activeClassName={"activeNavlink"} exact to="/">
					Homepage
				</NavLink>
			</div>
			<div className="link">
				<NavLink className={"navlink"} activeClassName={"activeNavlink"} exact to="/about-us">
					About Us
				</NavLink>
			</div>
		</div>
	);
}
