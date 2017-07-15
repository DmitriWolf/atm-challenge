import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../actions/authentication';
import LoginInput from '../components/LoginInput';

class Login extends Component {

  render() {
    return (
      <LoginInput login={this.props.actions.login} authentication={this.props.authentication} />
    );
  }
}

Login.propTypes = {
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
    actions: bindActionCreators(authenticationActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
