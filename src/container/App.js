import React, { Component } from 'react';
import { Header } from '../components/header';
import { FlexParent } from '../components/flexParent';
import { Controls } from '../components/controls';
import { Footer } from '../components/footer';

import '../styles/App.css';

const initialState = {
  style: {
    display: "flex",
    flexDirection: "",
    flexWrap: "",
    justifyContent: "",
    alignItems: "",
    alignContent: "",
  },
  childDivs: [1, 2, 3, 4],
  error: ""
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  };

  addChildDiv() {
    const { childDivs } = this.state;
    if (childDivs.length > 9) {
      this.setState({ error: "maximum child items is set to 10" });
    } else {
      const num = !childDivs.length ? 0 : Math.max(...childDivs);
      const newDivs = childDivs.concat(num + 1);
      this.setState({ childDivs: newDivs });
    }
  }

  formatTitle(title) {
    let splitTitle = title.split('-');
    splitTitle = splitTitle[0] + splitTitle[1].slice(0, 1).toUpperCase() + splitTitle[1].slice(1);
    return splitTitle;
  }

  handleChange(title, prop) {
    const formattedTitle = this.formatTitle(title);
    const newStyle = Object.assign({}, this.state.style, { [formattedTitle]: prop });
    this.setState({ style: newStyle });
  }

  handleReset() {
    this.setState(initialState);
  }

  handleDelete(divNumber) {
    const filtered = this.state.childDivs.filter(div => div !== divNumber);
    this.setState({ childDivs: filtered });
  }

  render() {
    const { style, childDivs, error } = this.state;
    return (
      <div className="App">
        <Header handleDiv={ this.addChildDiv.bind(this) } handleReset={ this.handleReset.bind(this) }/>
        { error && <p className="error">error: { error }</p> }
        <section className="main-wrapper">
          <FlexParent style={ style } divs={ childDivs } handleDelete={ this.handleDelete.bind(this) }/>
          <Controls handleChange={ this.handleChange.bind(this) }/>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
