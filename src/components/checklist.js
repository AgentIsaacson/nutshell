import React from "react";

export default function(main, extra) {
	return (
		<div className="checklist">
			<i className="fas fa-check" />
			<p className="checklist__main">{main}</p>
			<p className="checklist__sub">... {extra}</p>
		</div>
	);
}
