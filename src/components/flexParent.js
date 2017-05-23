import React from 'react';
import { FlexChild } from './flexChild';

export const FlexParent = ({ flexClass }) => {
  const className = `flex-parent ${flexClass}`;

  const renderChildrenDiv = () => {
    return [1, 2, 3, 4].map((num, i) => {
      return (
        <FlexChild key={i} divNumber={ num }/>
      )
    })
  }

  return (
    <section className={ className }>
      { renderChildrenDiv() }
    </section>
  )
}
