import React, { Component } from 'react';
import { Link } from 'react-router'

class Logout extends Component {
  render() {
    return (
      <div className="dashboard logout">
        <h2>Thank you for using this Bank of Dmitri ATM.</h2>

        <ul className="menu">
          <Link to="/login"><li>Login</li></Link>
        </ul>
      </div>
    );
  }
}

export default Logout;
