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
      style: {
        display: "flex",
        flexDirection: "",
        flexWrap: "",
        justifyContent: "",
        alignItems: "",
        alignContent: "",
      },
      childDivs: [1, 2, 3, 4],
    }
  };

  addChildDiv() {
    const num = Math.max(...this.state.childDivs);
    const newDivs = this.state.childDivs.concat(num + 1);
    this.setState({ childDivs: newDivs })
  }

  formatTitle(title) {
    let splitTitle = title.split('-');
    splitTitle = splitTitle[0] + splitTitle[1].slice(0, 1).toUpperCase() + splitTitle[1].slice(1);
    return splitTitle;
  }

  handleChange(title, prop) {

    const formattedTitle = this.formatTitle(title);
    const newStyle = Object.assign({}, this.state.style, { [formattedTitle]: prop })
    this.setState({
      style: newStyle
    })
  }

  render() {
    const { style, childDivs } = this.state;
    return (
      <div className="App">
        <Header handleDiv={ this.addChildDiv.bind(this) }/>
        <FlexParent style={ style } divs={ childDivs }/>
        <Controls handleChange={ this.handleChange.bind(this) }/>
        <Footer />
      </div>
    );
  }
}

export default App;
