import update from 'react/lib/update';

export default function account(state = [], action) {

  switch (action.type) {
    case 'SET_ACCOUNT':
      return update(state, {
        pin: {
          $set: action.payload.pin 
        },
        balance: {
          $set: action.payload.balance 
        }
      });

    case 'RESET_ACCOUNT':
      return update(state, {
        pin: {
          $set: null 
        },
        balance: {
          $set: null 
        }
      });

    case 'MAKE_DEPOSIT':
      return state;

    case 'TRANSACTION_BEGUN':
      return update(state, {
          transactionInProgress: {
            $set: true 
          },
          transactionSuccess: {
            $set: false 
          }
      });

    case 'TRANSACTION_ENDED':
      return update(state, {
          transactionInProgress: {
            $set: false 
          }
      });

    case 'TRANSACTION_SUCCESS':
      return update(state, {
          transactionSuccess: {
            $set: true 
          }
      });

    case 'TRANSACTION_FAILURE':
      return update(state, {
          transactionSuccess: {
            $set: false 
          }
      });

    case 'RESET_TRANSACTION':
      return update(state, {
        transactionInProgress: {
          $set: false 
        },
        transactionSuccess: {
          $set: false 
        }
      });
      
    default:
      return state;
	  }
	}
