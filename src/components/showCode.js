import React from 'react';
import { Button } from './button';

import '../styles/showCode.css';

export const ShowCode = ({ handleShowCode, divs, style }) => {

  const toHTML = () => {
    return divs.map(div => {
      return `
        <div id="flexbox-child-${div}"></div>
      `
    }).join('')
  }

  const toCSS = () => {
    return Object.keys(style).map(sty => {
      return style[sty] !== "" ? `${sty}: ${style[sty]};` : null;
    }).join('')
  }

  const htmlRender = () => {
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

  const cssRender = () => {
    return (
      <code>
        {`
          .flexbox-container {
            ${ toCSS() }
          }
        `}
      </code>
    )
  }

  return (
    <section className="show-code--section">
      <Button name="X" className="btn toggle--btn" handleClick={ handleShowCode }/>
      <h1 className="show-code-header">Source Code</h1>
      <div className="code-wrapper">
        <div className="html-div">
          { htmlRender() }
        </div>
        <div className="css-div">
          { cssRender() }
        </div>
      </div>
    </section>
  )
}
