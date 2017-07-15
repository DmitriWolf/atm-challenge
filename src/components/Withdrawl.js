import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Withdrawl extends Component {
    constructor(props) {
    super(props);

    this.state = {
      depositAmount: '',
      errorMessage: '',
      progressMessage: 'Please wait while your transaction is processed.',
      failureMessage: 'We are sorry. Somethinng went wrong.',
      successMessage: 'Withdrawl complete.'
    }

    this.updateInput = this.updateInput.bind(this);
    this.enterWithdrawl = this.enterWithdrawl.bind(this);
  }

  enterWithdrawl() {
    const amount = parseInt(this.state.depositAmount, 10);
    if(isNaN(amount)  || amount%20 !== 0) {
      this.setState({
        errorMessage: "Please enter a number divisible by 20."
      });
      return;
    }
    if(isNaN(amount)  || amount < 20.0 || amount%20 !== 0) {
      this.setState({
        errorMessage: "We cannot dispense less than $20."
      });
      return;
    }
    if(amount > this.props.account.balance) {
      this.setState({
        errorMessage: "You do not have sufficient funds to make this withdrawl."
      });
      return;
    }
    const withdrawlAmount = -Math.abs(amount).toString();
    this.props.makeDeposit(this.props.account.pin, withdrawlAmount);
  }

  updateInput(e) {
    // @todo: validate content - only allow numbers
    this.setState({depositAmount: e.target.value});
  }


  render() {
    if(this.props.account.transactionInProgress) {
      return (
        <div className="withdrawl">
          <h3>{this.state.progressMessage}</h3>
          <button disabled="true" onClick={this.props.mainMenu}>Done</button>
        </div>
      );
    }

    if(this.props.account.transactionFailure) {
      return (
        <div className="withdrawl">
          <h3>{this.state.failureMessage}</h3>
          <button className="warn" onClick={this.props.mainMenu}>Cancel</button>
        </div>
      );
    }

    if(this.props.account.transactionSuccess) {
      return (
        <div className="withdrawl">
          <h3>{this.state.successMessage}</h3>
          <button className="go" onClick={this.props.mainMenu}>Done</button>
        </div>
      );
    }
    return (
      <div className="withdrawl">
        <h3>How much will you withdraw?</h3>
          <input 
            value={this.state.depositAmount} 
            placeholder="0.00"
            ref="depositInput"
            onChange={this.updateInput} 
            />

          <button className="go" onClick={this.enterWithdrawl}>
            Make Withdrawl
          </button>

          <div className="error-message">
            {this.state.errorMessage}
          </div>
          <button className="warn" onClick={this.props.mainMenu}>Cancel</button>
      </div>
    );
  }
}

Withdrawl.propTypes = {
  makeDeposit: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired
};

export default Withdrawl;
