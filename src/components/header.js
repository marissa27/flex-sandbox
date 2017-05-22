import React from 'react';
import { Button } from './button';

export const Header = () => {
  return (
    <header>
      <h1>Flexbox Sandbox</h1>
      <Button name="Show Code" className="btn show-code--btn"/>
      <Button name="Reset" className="btn reset--btn"/>
    </header>
  )
}
