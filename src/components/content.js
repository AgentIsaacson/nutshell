import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import StoreForm from './stores/store-form';
import RepForm from './reps/rep-form';
import Spacescape from './stores/pages/spacescape';


export default function() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rep-form" component={RepForm} />
        <Route exact path="/store-form" component={StoreForm} />
        <Route exact path="/stores/spacescape" component={Spacescape} />
      </Switch>
    </div>
  );
}