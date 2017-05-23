import React, { Component } from 'react';
import { Header } from '../components/header';
import { FlexParent } from '../components/flexParent';
import { Controls } from '../components/controls';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FlexParent />
        <Controls />
      </div>
    );
  }
}

export default App;
