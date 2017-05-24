import React, { Component } from 'react';
import { Button } from './button';

export default class FlexChild extends Component {
  constructor() {
    super();
    this.state = {
      height: 200,
      width: 125,
      order: 0,
      flexGrow: 0,
    }
  }

  handleChildProps(e) {
    const { value, name, min } = e.target
    const checkMin = value < min ? min : value;
    this.setState({
      [name]: checkMin
    })
  }

  handleKeyDown(e) {
    if(e.keyCode !== 38 && e.keyCode !== 40) {
      e.preventDefault();
    }
  }

  render() {
    const { height, width, order, flexGrow } = this.state;
    const { handleDelete, divNumber } = this.props;
    return (
      <div style={ this.state } className="flex-child">
        <Button
          className="delete-btn"
          handleClick={ handleDelete }
          name="X"
          divNumber={ divNumber }
        />
        <h2>{ this.props.divNumber }</h2>
        <div className="input-wrapper">
          <p className="input-label">
            <span>H</span>
            <input
              className="child-input"
              type="number"
              value={ height }
              name="height"
              min="200"
              max="300"
              step="5"
              onKeyDown={ (e) => this.handleKeyDown(e) }
              onChange={ (e) => this.handleChildProps(e) }
            />
          </p>
          <p className="input-label">
            <span>W</span>
            <input
              className="child-input"
              type="number"
              value={ width }
              name="width"
              min="125"
              step="5"
              onKeyDown={ ((e) => this.handleKeyDown(e)) }
              onChange={ (e) => this.handleChildProps(e) }
            />
          </p>
          <p className="input-label">
            <span>O</span>
            <input
              className="child-input"
              type="number"
              value={ order }
              name="order"
              min="0"
              onChange={ (e) => this.handleChildProps(e) }
            />
          </p>
          <p className="input-label">
            <span>FG</span>
            <input
              className="child-input"
              type="number"
              value={ flexGrow }
              name="flexGrow"
              min="0"
              onChange={ (e) => this.handleChildProps(e) }
            />
          </p>
        </div>
      </div>
    )
  }
}
