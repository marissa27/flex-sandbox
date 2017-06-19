import React from 'react';
import { Button } from './button';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/styles';

import './showCode.css';

export const ShowCode = ({ handleShowCode, divs, style }) => {

  const toHTML = () => {
    return divs.map(div => {
      return `
        <div id="flexbox-child-${div.id}"></div>
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
      <SyntaxHighlighter language='html' style={dracula} >
        {`
          <section class="flexbox-container">
            ${ toHTML() }
          </section>
        `}
      </SyntaxHighlighter>
    )
  }

  const cssRender = () => {
    return (
      <SyntaxHighlighter language='css' style={dracula}>
        {`
          .flexbox-container {
            ${ toCSS() }
          }
        `}
      </SyntaxHighlighter>
    )
  }

  return (
    <section className="modal-wrapper">
      <section className="show-code--section">
        <Button name="X" className="toggle--btn" handleClick={ handleShowCode }/>
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
    </section>
  )
}