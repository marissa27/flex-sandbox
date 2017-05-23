import React, { Component } from 'react';
import { FlexChild } from './flexChild';

export default class FlexParent extends Component {
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


  renderChildrenDiv = () => {
    return [1, 2, 3, 4].map((num, i) => {
      return (
        <FlexChild key={i} divNumber={ num }/>
      )
    })
  }
  render() {
    return (
      <section className="flex-parent" style={ this.state }>
        { this.renderChildrenDiv() }
      </section>
    )
  }
}
