import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { rootReducer, initialState } from '../reducers/index';
import { createLogger } from 'redux-logger';

export default function configureStore() {

  const middleware = [
    thunkMiddleware
  ];
	  
	const logger = createLogger({
    collapsed: true,
    diff: true
  });

  middleware.push(logger);

  const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
  ));
	return store;
}