import React from 'react';
import { flexProps } from '../helpers/flexProperties';
import { SubControl } from './subControl';

export const Controls = ({ handleChange }) => {

  const renderFlexProps = () => {
    return flexProps.map((flexProp, i) => {
      const { title, props } = flexProp;
      return ( <SubControl key={ i } title={ title } properties={ props } handleChange={ handleChange } /> )
    });
  }

  return (
    <section className="flex-controls">
      { renderFlexProps() }
    </section>
  )
}
