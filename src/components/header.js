import React from 'react';
import { Button } from './button';

export const Header = ({ handleDiv, handleReset, handleShowCode }) => {
  return (
    <header>
      <h1>Flexbox Sandbox</h1>
      <Button name="Add Div" className="btn add-div--btn" handleClick={ handleDiv }/>
      <Button name="Show Code" className="btn show-code--btn" handleClick={ handleShowCode }/>
      <Button name="Reset" className="btn reset--btn" handleClick={ handleReset }/>
    </header>
  )
}
