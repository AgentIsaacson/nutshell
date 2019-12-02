import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default class Gallery extends Component {
	render() {
		return (
			<div className="gallery">
				<Navbar />
				<div className="all-shows">
					<div className="show">
						<h3>12 Dancing Princesses</h3>
						<div className="show-all-images">
							<image className="show-image" src=""/>
						</div>
					</div>
					<div className="show">
						<h3>Addams Family</h3>
						<div className="show-all-images">
							<image className="show-image" src=""/>
						</div>
					</div>
					<div className="show">
						<h3>I Never Saw Another Butterfly</h3>
						<div className="show-all-images">
							<image className="show-image" src=""/>
						</div>
					</div>
					<div className="show">
						<h3>Music Man</h3>
						<div className="show-all-images">
							<image className="show-image" src=""/>
						</div>
					</div>
					<div className="show">
						<h3>Once Uppon A Mattress</h3>
						<div className="show-all-images">
							<image className="show-image" src=""/>
						</div>
					</div>
				</div>
				<div className="viewer">
					<img className="img-responsive" src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"/>
				</div>
				<Footer />
			</div>
		);
	}
}


