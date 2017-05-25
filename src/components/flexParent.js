import React from 'react';
import { FlexChild } from './flexChild';

export const FlexParent = ({ style, divs, handleDelete, handleChildProps }) => {

  const renderChildrenDiv = () => {
    return divs.map((div, i) => {
      return (
        <FlexChild
          key={i}
          childProps={ div }
          handleDelete={ handleDelete }
          handleChildProps={ handleChildProps }
        />
      )
    })
  }
  return (
    <section className="flex-parent" style={ style }>
      { renderChildrenDiv() }
    </section>
  )
}
