import React from 'react';

export const Button = ({ name, className, handleClick }) => {
  return (
    <button className={ className } onClick={ () => handleClick() }>{ name }</button>
  )
}
