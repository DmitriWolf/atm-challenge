import {Client} from '../http/Client';
import {browserHistory} from 'react-router';

export const login = function login(pin) {
	return (dispatch) => {
		dispatch({
			type: 'LOGIN_REQUESTED',
			payload: pin
		});

    Client.request({pin}, "GET")
      .then((response) => {
        if(response) {
           dispatch({
				      type: "LOGIN_SUCCESSFUL",
				      payload: response
				    });
           dispatch({
				      type: "SET_ACCOUNT",
				      payload: response
				    });
           browserHistory.push('/dashboard');

        }
      })
      .catch((e)=> {
      	console.error('auth Action - catch - e: ', e);
  	    dispatch({
		      type: "LOGIN_FAILED"
		    });
  	    dispatch({
		      type: "RESET_ACCOUNT"
		    });
      });
   }
}

export const logout = function logout() {
	return (dispatch) => {
		dispatch({
			type: 'LOGOUT_REQUESTED'
		});
    dispatch({
      type: "RESET_ACCOUNT"
    });
	}
}
