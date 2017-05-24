import React from 'react';

export const Button = ({ name, className, handleClick, divNumber }) => {
  return (
    <button className={ className } onClick={ () => handleClick(divNumber) }>{ name }</button>
  )
}
