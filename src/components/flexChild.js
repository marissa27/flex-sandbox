import React from 'react';
import { Button } from './button';

export const FlexChild = ({ childProps, handleDelete, handleChildProps }) => {

  const handleKeyDown = (e) => {
    if(e.keyCode !== 38 && e.keyCode !== 40) {
      e.preventDefault();
    }
  }

  const { id, height, width, order, flexGrow } = childProps;
  return (
    <div className="flex-child" style={{ height, width, order, flexGrow }}>
      <Button
        className="delete-btn"
        handleClick={ handleDelete }
        name="X"
        divNumber={ id }
      />
      <h2>{ id }</h2>
      <div className="input-wrapper">
        <p className="input-label">
          <span>H</span>
          <input
            className="child-input"
            type="number"
            value={ height }
            name="height"
            min="200"
            max="300"
            step="5"
            onKeyDown={ (e) => handleKeyDown(e) }
            onChange={ (e) => handleChildProps(e, id) }
          />
        </p>
        <p className="input-label">
          <span>W</span>
          <input
            className="child-input"
            type="number"
            value={ width }
            name="width"
            min="125"
            step="5"
            onKeyDown={ ((e) => handleKeyDown(e)) }
            onChange={ (e) => handleChildProps(e, id) }
          />
        </p>
        <p className="input-label">
          <span>O</span>
          <input
            className="child-input"
            type="number"
            value={ order }
            name="order"
            min="0"
            onChange={ (e) => handleChildProps(e, id) }
          />
        </p>
        <p className="input-label">
          <span>FG</span>
          <input
            className="child-input"
            type="number"
            value={ flexGrow }
            name="flexGrow"
            min="0"
            onChange={ (e) => handleChildProps(e, id) }
          />
        </p>
      </div>
    </div>
  )
}
