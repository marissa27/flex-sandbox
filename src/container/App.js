import React, { Component } from 'react';
import { Header } from '../components/header';
import { FlexParent } from '../components/flexParent';
import { Controls } from '../components/controls';
import { Footer } from '../components/footer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "flex",
      flexDirection: "",
      flexWrap: "",
      justifyContent: "",
      alignItems: "",
      alignContent: "",
    }
  }

  formatTitle(title) {
    let splitTitle = title.split('-');
    splitTitle = splitTitle[0] + splitTitle[1].slice(0,1).toUpperCase() + splitTitle[1].slice(1);
    return splitTitle;
  }

  handleChange(title, prop) {
    let formattedTitle = this.formatTitle(title);
    this.setState({
      [formattedTitle]: prop
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FlexParent style={this.state}/>
        <Controls handleChange={this.handleChange.bind(this)}/>
        <Footer />
      </div>
    );
  }
}

export default App;
