import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import StoreForm from './stores/store-form';
import RepForm from './reps/rep-form';
import Spacescape from './stores/pages/spacescape';
import Coolness from './stores/pages/coolness';
import Contact from './contact-us';
import About from './about-us';


export default function() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/rep-form" component={RepForm} />
        <Route exact path="/store-form" component={StoreForm} />
        <Route exact path="/stores/spacescape" component={Spacescape} />
        <Route exact path="/stores/coolness" component={Coolness} />
      </Switch>
    </div>
  );
}