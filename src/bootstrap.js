import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import reducers from "./reducers";

import HomePage from './components/homepage';
import Gallery from './components/gallery';
import Resume from './components/resume';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "bootstrap/dist/css/bootstrap.css";
import "./style/main.scss";

function main() {
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/gallery" component={Gallery} />
					<Route exact path="/resume" component={Resume} />
				</Switch>
			</BrowserRouter>
		</Provider>,
		document.querySelector(".app-wrapper")
	);
}

document.addEventListener("DOMContentLoaded", main);
