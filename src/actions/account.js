import {Client} from '../http/Client';
var client = new Client();

export const setAccount = function setAccount(pin, balance) {
	return (dispatch) => {
		dispatch({
			type: 'SET_ACCOUNT',
			payload: {
				pin,
				balance
			}
		});
   }
}

export const resetAccount = function resetAccount(pin, balance) {
	return (dispatch) => {
		dispatch({
			type: 'RESET_ACCOUNT'
		});
   }
}

export const resetTransaction = function resetTransaction() {
	return (dispatch) => {
		dispatch({
			type: 'RESET_TRANSACTION'
		});
   }
}

export const makeDeposit = function makeDeposit(pin, amount) {
	return (dispatch) => {
		dispatch({
			type: 'TRANSACTION_BEGUN'
		});

	  client.request({
	    	pin,
	    	amount
	    }, "PUT")
	  .then((response) => {
	    if(response) {
				dispatch({
					type: 'SET_ACCOUNT',
					payload: {
						pin: response.pin,
						balance: response.balance
					}
				});
				dispatch({
					type: 'TRANSACTION_SUCCESS'
				});
				dispatch({
					type: 'TRANSACTION_ENDED'
				});
				// return Promise.resolve();
	    }
	  })
	  .catch((e)=> {
			dispatch({
				type: 'TRANSACTION_FAILURE'
			});
			dispatch({
				type: 'TRANSACTION_ENDED'
			});
	  });
	}
}