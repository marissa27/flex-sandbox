import React from 'react';

export const SubControl = ({ properties, title, handleChange }) => {

  const renderRadioBtn = () => {
    return properties.map((prop, i) =>
            <p className="flex-prop" key={i}>
              <input type="radio" id={ prop } value={ prop } name={ title }/>
              <label htmlFor={ prop }>{ prop }</label>
            </p>
    );
  }

  return (
    <article>
      <h3>{ title }</h3>
      { renderRadioBtn() }
    </article>
  )
}
