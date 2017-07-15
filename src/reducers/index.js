import authentication from './authentication.js';
import account from './account.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  authentication,
  account
});

const initialState = {
	authentication: {
		loginRequested: false,
		authenticated: false,
		loginFailed: false
	},
	account: {
		pin: null,
		balance: null,
		transactionInProgress: false,
		transactionSuccess: false
	}
}

export { rootReducer, initialState };
