import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import reducers from "./reducers";

import HomePage from './components/homepage';
import Stores from './components/stores/stores';
import StoreSignup from './components/store-signup';
import RepSignup from './components/rep-signup';
import Contact from './components/contact-us';
import About from './components/about-us';
import StoreForm from "./components/store-form";

import ChocolateHouse from './components/stores/chocolatehouse';
import JustAddChocolate from './components/stores/just-add-chocolate';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "bootstrap/dist/css/bootstrap.css";
import "./style/main.scss";

function main() {
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/stores" component={Stores} />
					<Route exact path="/about-us" component={About} />
					<Route exact path="/contact-us" component={Contact} />
					<Route exact path="/rep-signup" component={RepSignup} />
					<Route exact path="/store-signup" component={StoreSignup} />
					<Route exact path="/setup-my-store" component={StoreForm} />
					<Route exact path="/stores/chocolatehouse" component={ChocolateHouse} />
					<Route exact path="/stores/just-add-chocolate" component={JustAddChocolate} />
				</Switch>
			</BrowserRouter>
		</Provider>,
		document.querySelector(".app-wrapper")
	);
}

document.addEventListener("DOMContentLoaded", main);
