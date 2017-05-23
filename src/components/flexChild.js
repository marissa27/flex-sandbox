import React, { Component } from 'react';

export default class FlexChild extends Component {
  constructor() {
    super();
    this.state = {
      height: 300,
      width: 125,
      order: 0,
      flexGrow: 0,
    }
  }

  handleChildProps(e) {
    const { value, name, min } = e.target
    const checkMin = value < min ? min : value;
    console.log(checkMin)
    this.setState({
      [name]: checkMin
    })
  }

  handleKeyDown(e) {
    e.preventDefault();
  }

  render() {
    const { height, width, order, flexGrow } = this.state;
    return (
      <div style={ this.state } className="flex-child">
        <h2>{ this.props.divNumber }</h2>
        <div className="input-wrapper">
          <p className="input-label">
            <span>Height</span>
            <input className="child-input" type="number" value={ height } name="height" min="125" max="300" step="5" onKeyDown={ (e) => this.handleKeyDown(e) } onChange={ (e) => this.handleChildProps(e) } />
            </p>
        <p className="input-label">
          <span>Width</span>
          <input className="child-input" type="number" value={ width } name="width" min="125" step="5" onKeyDown={ ((e) => this.handleKeyDown(e)) } onChange={ (e) => this.handleChildProps(e) }/>
          </p>
      <p className="input-label">
        <span>Order</span>
        <input className="child-input" type="number" value={ order } name="order" min="0" onChange={ (e) => this.handleChildProps(e) }/>
        </p>
    <p className="input-label">
      <span>Flex-Grow</span>
      <input className="child-input" type="number" value={ flexGrow } name="flexGrow" min="0" onChange={ (e) => this.handleChildProps(e) }/>
      </p>
        </div>
      </div>
    )
  }
}
