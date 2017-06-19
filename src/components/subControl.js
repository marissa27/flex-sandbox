import React from 'react';

export const SubControl = ({ properties, title, handleChange }) => {

  const renderRadioBtn = () => {
    return properties.map((prop, i) => {
      const isCheck = i === 0 ? true : false;
      return (
        <p className="flex-prop" key={i}>
          <input
            id={ prop + title }
            type="radio"
            value={ prop }
            name={ title }
            defaultChecked={ isCheck }
            onClick={() => handleChange(title, prop)}
          />
          <label htmlFor={ prop + title }>{ prop }</label>
        </p>
      )
    });
  }

  return (
    <article className="control-list">
      <h3>{ title }</h3>
      <div className="prop-wrap">
        { renderRadioBtn() }
      </div>
    </article>
  )
}
