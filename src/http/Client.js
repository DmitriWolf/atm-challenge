import _ from 'lodash';

export const Client = function Client () {
  var vault = function() {
    var accounts = [
      {
        pin: '1234',
        balance: '200.00'
      },
      {
        pin: '1111',
        balance: '10.06'
      },
      {
        pin: '4444',
        balance: '432.10'
      }
    ];

    var vaultModule = {};
    vaultModule.get = function(pin) { 
      const index = _.findIndex(accounts, {pin});
      if(index === undefined) {
        return index;
      }
      return accounts[index];
    }
    vaultModule.put = function(pin, balance) { 
      const index = _.findIndex(accounts, {pin});
      if(index === undefined) {
        return index;
      }
      const updatedAccount = { pin, balance };
      accounts.splice(index, 1, updatedAccount);
      return updatedAccount;
    }
    return vaultModule;
  }

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
        if(newBalance < account.balance) {
          Promise.reject({error: "insufficient-funds"});
        }
        const updatedAccount = teller.put(data.pin, newBalance);
        return Promise.resolve(updatedAccount);

      default:
        return Promise.reject({error: 'An unknown error occurred.'});
    }
  }

  return clientModule;
}
