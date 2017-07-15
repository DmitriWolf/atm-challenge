import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deposit extends Component {
	constructor(props) {
    super(props);

    this.state = {
      depositAmount: '',
      errorMessage: '',
      progressMessage: 'Please wait while your transaction is processed.',
      failureMessage: 'We are sorry. Somethingn went wrong.',
      successMessage: 'Deposit complete.'
    }

    this.updateInput = this.updateInput.bind(this);
    this.enterDeposit = this.enterDeposit.bind(this);
  }

  enterDeposit() {
    this.setState({
      errorMessage: ""
    });
  	const amount = parseFloat(this.state.depositAmount);
  	if(isNaN(amount)  || amount < 0.01) {
  		this.setState({
        errorMessage: "Please enter a number greater than a penny."
      });
  		return;
  	}
    this.props.makeDeposit(this.props.account.pin, this.state.depositAmount);
  }

  updateInput(e) {
    // @todo: validate content - only allow numbers, use a regex 
    this.setState({depositAmount: e.target.value});
  }


  render() {
    if(this.props.account.transactionInProgress) {
      return (
        <div className="deposit">
          <h3>{this.state.progressMessage}</h3>
          <button disabled="true" onClick={this.props.mainMenu}>Done</button>
        </div>
      );
    }

    if(this.props.account.transactionFailure) {
      return (
        <div className="deposit">
          <h3>{this.state.failureMessage}</h3>
          <button className="warn" onClick={this.props.mainMenu}>Cancel</button>
        </div>
      );
    }

    if(this.props.account.transactionSuccess) {
      return (
        <div className="deposit">
          <h3>{this.state.successMessage}</h3>
          <button className="go" onClick={this.props.mainMenu}>Done</button>
        </div>
      );
    }

    return (
      <div className="deposit">
        <h3>How much will you deposit?</h3>
          <input 
            value={this.state.depositAmount} 
            placeholder="0.00"
            ref="depositInput"
            onChange={this.updateInput} 
            />

          <button className="go" onClick={this.enterDeposit}>
            Make Deposit
          </button>

          <div className="error-message">
            {this.state.errorMessage}
          </div>
          <button className="warn" onClick={this.props.mainMenu}>Cancel</button>
      </div>
    );
  }
}

Deposit.propTypes = {
  makeDeposit: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired
};

export default Deposit;
