import React from "react";
import { NavLink } from "react-router-dom";

export default function() {
	return (
		<div>
			<ul>
				<li>
					<NavLink exact to="/">
						Homepage
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/rep-form">
						rep-form
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/store-form">
						store-form
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/stores/spacescape">
						Spacescape
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
