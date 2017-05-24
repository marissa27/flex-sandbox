import React from 'react';
import sandbox from '../images/sandbox-header.svg';
import github from '../images/github.svg';

export const Footer = () => {
  return (
    <footer>
      <img className="sandbox" src={ sandbox } alt="A bucket within a sandbox"/>
      <a className="git-link" href="https://github.com/marissa27/flex-sandbox"><img className="github-icon" src={ github } alt="github icon" /></a>
    </footer>
  )
}
