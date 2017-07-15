import React, { Component } from 'react';

class Balance extends Component {
  render() {
		const balance = parseFloat(this.props.account.balance).toFixed(2);
    return (
      <div className="balance">
        <h3>Balance Inquiry Page</h3>
        <p>Your current balance is: ${balance}</p>
        <button className="go" onClick={this.props.mainMenu}>Done</button>
      </div>
    );
  }
}

export default Balance;
