import Vault from './Vault';

export const Client = (function Client () {
  var vault = new Vault();
  var teller = new vault();

  var clientModule = {};
  clientModule.request = function (data, method) {
    const account = teller.get(data.pin);
    if(account === undefined) {
      return Promise.reject({error: 'account not found'});
    }

    switch (method) {
      case 'GET':
        return Promise.resolve(account);

      case 'PUT':
        let newBalance = parseFloat(account.balance) + parseFloat(data.amount);
        if(newBalance < 0) {
          Promise.reject({error: "insufficient-funds"});
        }
        const updatedAccount = teller.put(data.pin, newBalance);
        return Promise.resolve(updatedAccount);

      default:
        return Promise.reject({error: 'An unknown error occurred.'});
    }
  }

  return clientModule;
})()
