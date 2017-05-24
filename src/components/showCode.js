import React from 'react';
import { Button } from './button';

import './showCode.css';

export const ShowCode = ({ handleShowCode, divs }) => {

  const toHTML = () => {
    return divs.map(div => {
      return `
        <div id="flexbox-child-${div}"></div>
      `
    }).join('')
  }

  const toRender = () => {
    return (
      <code>
        {`
          <section class="flexbox-container">
            ${ toHTML() }
          </section>
        `}
      </code>
    )
  }

  return (
    <section className="show-code--section">
      <Button name="X" className="btn toggle--btn" handleClick={ handleShowCode }/>
      <h1 className="show-code-header">Source Code</h1>
      <div className="html-div">
        { toRender() }
      </div>
    </section>
  )
}
