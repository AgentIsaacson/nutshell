import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

export const Outline = (title, description, link) => {
	return (
		<div className="outline">
			<Navbar />
			<h2>{title}</h2>
			<p>{description}</p>
			<a href={link}>Send {title} a Nutshell Here</a>
			<Footer />
		</div>
	);
};
