import React, { Component } from 'react';
import { Button } from '../components/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Flexbox Sandbox</h1>
        <Button name="Show Code" className="btn show-code--btn"/>
        <Button name="Reset" className="btn reset--btn"/>
      </div>
    );
  }
}

export default App;
