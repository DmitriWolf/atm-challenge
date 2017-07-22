import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './styles.css';
import App from './App';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      	<IndexRoute component={Dashboard}/>
      	<Route path="/login" activeClassName="active" component={Login} />
      	<Route path="/dashboard" activeClassName="active" component={Dashboard} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))

registerServiceWorker();