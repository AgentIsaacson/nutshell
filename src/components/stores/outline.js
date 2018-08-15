import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Survey from "./survey";

export const Outline = (title, description, link) => {
	return (
		<div className="outline">
			<Navbar />
			<h2>{title}</h2>
			<p>{description}</p>
			<Survey title = {title}/>
			<Footer />
		</div>
	);
};
