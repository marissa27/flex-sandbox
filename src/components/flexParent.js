import React from 'react';
import { FlexChild } from './flexChild';

export const FlexParent = ({ flexClass }) => {
  const className = `flex-parent ${flexClass}`;

  const renderChildrenDiv = () => {
    return [1, 2, 3,4 ].map(num => {
      return (
        <FlexChild divNumber={ num }/>
      )
    })
  }

  return (
    <section className={ className }>
      { renderChildrenDiv() }
    </section>
  )
}
