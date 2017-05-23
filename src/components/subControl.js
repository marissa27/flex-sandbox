import React from 'react';

export const SubControl = ({ properties, title, handleChange }) => {

  const renderRadioBtn = () => {
    return properties.map((prop, i) => {
      const isCheck = i === 0 ? true : false;
      return (
        <p className="flex-prop" key={i}>
          <input type="radio" id={ prop } value={ prop } name={ title } defaultChecked={ isCheck }/>
          <label htmlFor={ prop }>{ prop }</label>
        </p>
      )
    });
  }

  return (
    <article className="control-list">
      <h3>{ title }</h3>
      { renderRadioBtn() }
    </article>
  )
}
