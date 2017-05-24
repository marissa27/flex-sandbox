import React from 'react';
import { Button } from './button';
import sandbox from '../images/sandbox-header.svg';
import '../styles/Header.css';

export const Header = ({ handleDiv, handleReset }) => {
  return (
    <header>
      <h1><img className="header-icon" src={ sandbox } alt="sandbox icon"/> Flexbox Sandbox</h1>
      <Button name="Add Div" className="btn add-div--btn" handleClick={ handleDiv }/>
      <Button name="Show Code" className="btn show-code--btn"/>
      <Button name="Reset" className="btn reset--btn" handleClick={ handleReset }/>
    </header>
  )
}
