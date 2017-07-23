import _ from 'lodash';

export const Vault = (function Vault () {
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

    var vaultModule = function() { };
    vaultModule.prototype = {
      constructor: vaultModule,
      get: function(pin) { 
        const index = _.findIndex(accounts, {pin});
        if(index === undefined) {
          return index;
        }
        return accounts[index];
      },
      put: function(pin, balance) { 
        const index = _.findIndex(accounts, {pin});
        if(index === undefined) {
          return index;
        }
        const updatedAccount = { pin, balance };
        accounts.splice(index, 1, updatedAccount);
        return updatedAccount;
      }
    }

    return vaultModule;
  })();