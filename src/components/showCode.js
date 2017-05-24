import React from 'react';
import { Button } from './button';

import './showCode.css';

export const ShowCode = ({ handleShowCode }) => {
  return (
    <section className="show-code--section">
      <Button name="X" className="btn toggle--btn" handleClick={ handleShowCode }/>
      <h1>Show Code</h1>
    </section>
  )
}
