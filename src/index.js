import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './styles.css';
import App from './App';
import Login from './containers/Login';
import Logout from './components/Logout';
import Dashboard from './containers/Dashboard';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      	<IndexRoute component={Dashboard}/>
      	<Route path="/login" component={Login} />
      	<Route path="/dashboard" component={Dashboard} />
      	<Route path="/logout" component={Logout} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))

registerServiceWorker();