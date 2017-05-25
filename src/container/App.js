import React, { Component } from 'react';
import { Header } from '../components/header';
import { FlexParent } from '../components/flexParent';
import { Controls } from '../components/controls';
import { ShowCode } from '../components/showCode';
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
  childDivs: [],
  error: "",
  showCode: false,
}

const initialChildStyle = { height: 200, width: 125, order: 0, flexGrow: 0 };

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  };

  componentWillMount() {
    this.renderInitialDivs()
  }

  renderInitialDivs() {
    const loadedChildDivs = [1, 2, 3, 4].map(num => {
      return { id: num, ...initialChildStyle };
    })
    this.setState({ childDivs: loadedChildDivs });
  }

  addChildDiv() {
    const { childDivs } = this.state;
    if (childDivs.length > 9) {
      this.handleError();
    } else {
      const num = !childDivs.length ? 0 : childDivs[childDivs.length -1].id;
      const newDivs = childDivs.concat([{ id: num + 1, ...initialChildStyle }]);
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
    this.renderInitialDivs();
  }

  handleDelete(divNumber) {
    const filtered = this.state.childDivs.filter(div => div.id !== divNumber);
    this.setState({ childDivs: filtered });
  }

  handleChildProps(e, id) {
    const { value, name } = e.target
    const modified = this.state.childDivs.map(div => {
      if(div.id === id) {
        return Object.assign({}, div, { [name]: parseInt(value, 10) })
      }
      return div;
    })
    this.setState({ childDivs: modified })
  }

  toggleCode() {
    const toggle = !this.state.showCode
    this.setState({ showCode: toggle })
  }

  handleError() {
    this.setState({ error: "Maximum child items is set to 10" });
    setTimeout(() => { this.setState({ error: "" }) }, 3000);
  }

  render() {
    const { style, childDivs, error, showCode } = this.state;
    return (
      <div className="App">
        <Header
          handleDiv={ this.addChildDiv.bind(this) }
          handleReset={ this.handleReset.bind(this) }
          handleShowCode={ this.toggleCode.bind(this) }
        />
        { error && <p className="error">{ error }</p> }
        <section className="main-wrapper">
          <FlexParent
            style={ style }
            divs={ childDivs }
            handleDelete={ this.handleDelete.bind(this) }
            handleChildProps={ this.handleChildProps.bind(this) }
          />
          <Controls
            handleChange={ this.handleChange.bind(this) }
          />
        </section>
          { showCode &&
            <ShowCode
              handleShowCode={ this.toggleCode.bind(this) }
              divs={ childDivs }
              style={ style }
            />
          }
        <Footer />
      </div>
    );
  }
}

export default App;
