import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, browserHistory } from 'react-router';
import * as accountActions from '../actions/account';

import Balance from '../components/Balance';
import Deposit from '../components/Deposit';
import Withdrawl from '../components/Withdrawl';
import Logout from '../components/Logout';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    if(!props.authentication.authenticated) {
      browserHistory.push('/login');
    }

    this.state = {
      display: 'main'
    }

    this.mainMenu = this.mainMenu.bind(this);
    this.withdrawl = this.withdrawl.bind(this);
    this.deposit = this.deposit.bind(this);
    this.balance = this.balance.bind(this);
    this.signout = this.signout.bind(this);
  }

  mainMenu() {
    this.props.actions.resetTransaction();
    this.setState({display: 'main'});
  }

  withdrawl() {
    this.props.actions.resetTransaction();
    this.setState({display: 'withdrawl'});
  }

  deposit() {
    this.props.actions.resetTransaction();
    this.setState({display: 'deposit'});
  }

  balance() {
    this.props.actions.resetTransaction();
    this.setState({display: 'balance'});
  }

  signout() {
    this.setState({display: 'signout'});
  }

  renderMainMenu() {
  return (
      <div className="dashboard">
        <h2>Select your transaction.</h2>

        <ul className="menu">
          <li onClick={this.withdrawl}>Withdrawl</li>
          <li onClick={this.deposit}>Deposit</li>
          <li onClick={this.balance}>Balance Inquiry</li>
          <li onClick={this.signout}>Logout</li>
        </ul>
      </div>
    );
  }

  render() {
    switch(this.state.display) {
      case "balance":
        return (
          <div className="dashboard">
            <Balance 
              account={this.props.account} 
              mainMenu={this.mainMenu} />
          </div>
        );

      case "withdrawl":
        return (
          <div className="dashboard">
            <Withdrawl 
              account={this.props.account} 
              makeDeposit={this.props.actions.makeDeposit}
              mainMenu={this.mainMenu}  />
          </div>
        );

      case "deposit":
        return (
          <div className="dashboard">
            <Deposit 
              account={this.props.account} 
              makeDeposit={this.props.actions.makeDeposit} 
              mainMenu={this.mainMenu} />
          </div>
        );


      case "signout":
        return (
          <div className="dashboard">
            <Logout />
            <Link to={"/login"}>
              <button className="go">
                Login
              </button>
            </Link>
          </div>
        );

      default: 
        return this.renderMainMenu();
    }
  }
}

Dashboard.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    authentication: state.authentication,
    account: state.account
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
