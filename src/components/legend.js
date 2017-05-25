import React from 'react';

const renderChildProps = () => {
  const key = ["Height", "Width", "Order", "Flex-grow"];
  return key.map((prop, i) => <li key={i}>{ prop }</li>);
}

export const Legend = () => {
  return (
    <div className="legend">
      <div>
        <h3>Flex child properties</h3>
        <ul>
         { renderChildProps() }
        </ul>
      </div>
      <div>
        <h3>Additional resources</h3>
        <ul>
          <li>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes">MDN FlexBox
            </a>
          </li>
          <li>
            <a target="_blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
