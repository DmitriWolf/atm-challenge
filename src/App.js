import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to Bank of Dmitri</h1>
        </header>
        <div className="dashboard">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;


