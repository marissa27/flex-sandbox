import React from 'react';
import sandbox from '../images/sandbox.svg'

export const Footer = () => {
  return (
    <footer>
      <img className="sandbox" src={ sandbox } alt="A bucket within a sandbox"/>
      <a className="git-link" href="https://github.com/marissa27/flex-sandbox">GitHub</a>
    </footer>
  )
}
