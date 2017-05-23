import React, { Component } from 'react';
import { FlexChild } from './flexChild';

export const FlexParent = ({ style }) => {

  const renderChildrenDiv = () => {
    return [1, 2, 3, 4].map((num, i) => {
      return (
        <FlexChild key={i} divNumber={ num } />
      )
    })
  }
  return (
    <section className="flex-parent" style={ style }>
      { renderChildrenDiv() }
    </section>
  )
}
