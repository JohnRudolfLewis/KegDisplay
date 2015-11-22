import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Taps from './components/Taps';
import Kegs from './components/Kegs';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/Admin/Taps' component={Taps} />
    <Route path='/Admin/Kegs' component={Kegs} />
  </Route>
);