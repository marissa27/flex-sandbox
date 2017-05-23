import React from 'react';
import { flexProps } from '../helpers/flexProperties';
import { SubControl } from './subControl';

export const Controls = () => {

  const renderFlexProps = () => {
    return flexProps.map((flexProp, i) => {
      const { title, props } = flexProp;
      return ( <SubControl key={ i } title={ title } properties={ props } /> )
    });
  }

  return (
    <section className="flex-controls">
      { renderFlexProps() }
    </section>
  )
}
