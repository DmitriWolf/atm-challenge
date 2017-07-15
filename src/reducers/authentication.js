import update from 'react/lib/update';

export default function authentication(state = [], action) {
  
  switch (action.type) {
    case 'LOGIN_REQUESTED':
      return update(state, {
          authenticated: {
            $set: false 
          },
          loginRequested: {
            $set: true 
          }
      });

    case 'LOGOUT_REQUESTED':
      return update(state, {
          authenticated: {
            $set: false 
          }
      });

    case 'LOGIN_FAILED':
      return update(state, {
          authenticated: {
            $set: false 
          },
          loginRequested: {
            $set: false 
          },
          loginFailed: {
            $set: true
          }
      });

    case 'LOGIN_SUCCESSFUL':
      return update(state, {
          authenticated: {
            $set: true 
          },
          loginRequested: {
            $set: false 
          },
          loginFailed: {
            $set: false
          }
      });

    default:
      return state;
  }
};
