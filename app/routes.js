import React from 'react';
import {Route} from 'react-router';
import { IndexRoute } from 'react-router'
import App from './components/App';
import Home from './components/Home';
import Taps from './components/Taps';
import Kegs from './components/Kegs';
import AdminEditKeg from './components/AdminEditKeg';

export default (
  <Route path='/' component={App}>
  	<IndexRoute component={Home} />
    <Route path='Admin'>
    	<Route path='Taps' component={Taps} />
    	<Route path='Kegs' component={Kegs} />
    	<Route path='Kegs/:kegId' component={AdminEditKeg} />
    </Route>
  </Route>
);