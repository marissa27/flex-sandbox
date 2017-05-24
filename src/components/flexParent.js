import React, { Component } from 'react';
import FlexChild from './flexChild';

export const FlexParent = ({ style, divs, handleDelete }) => {

  const renderChildrenDiv = () => {
    return divs.map((num, i) => {
      return (
        <FlexChild key={i} divNumber={ num } handleDelete={ handleDelete }/>
      )
    })
  }
  return (
    <section className="flex-parent" style={ style }>
      { renderChildrenDiv() }
    </section>
  )
}
