import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    debugger
    return (
      <div className="App">
        <div className="App-header">
          <h2>This is the header</h2>
        </div>
          {this.props.children}
          <h1>This is the footer</h1>
      </div>
    );
  }
}

export default App;
