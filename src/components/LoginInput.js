import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginInput extends Component {
	constructor(props) {
    super(props);

    this.state = {
      pin: '',
      errorMessage: ''
    }
  }

  login() {
    const pin = this.state.pin;
    if(pin.length === 4) {
      this.props.login(pin);
    } else {
      this.setState({errorMessage: "PIN must be 4 numbers."})
    }
  }

  updateInput(e) {
    // @todo: validate content - only allow numbers, use a regex 
    if(e.target.value.length > 4) {
      this.refs.pinInput.value = this.state.pin;
      return;
    }
    this.setState({pin: e.target.value});
  }

  render() {
    let errorMessage;
    if(this.props.authentication.loginFailed) {
      errorMessage= 'Account Not Found.';
    } else {
      errorMessage = this.state.errorMessage;
    }

    return (
      <div className="login">
          <h3>Enter your pin.</h3>
          <div>
          <input 
            value={this.state.pin} 
            ref="pinInput"
            onChange={this.updateInput.bind(this)} 
            />
            </div>
          <button className="go" onClick={this.login.bind(this)}>
            Login
          </button>
          <div className="error-message">
            {errorMessage}
          </div>
      </div>
    );
  }
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  loginRequested: PropTypes.bool
};

export default LoginInput;
 