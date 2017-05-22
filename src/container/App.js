import React, { Component } from 'react';
import { Header } from '../components/header';
import { FlexParent } from '../components/flexParent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FlexParent />
      </div>
    );
  }
}

export default App;
