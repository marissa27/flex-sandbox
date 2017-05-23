import React, { Component } from 'react';
import { Header } from '../components/header';
import FlexParent from '../components/flexParent';
import { Controls } from '../components/controls';
import { Footer } from '../components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FlexParent />
        <Controls />
        <Footer />
      </div>
    );
  }
}

export default App;
