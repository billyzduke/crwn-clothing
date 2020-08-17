// <FormInput />
import React from 'react'

import './index.scss'

const FormInput = ({ handleChange, label, ...etcProps }) => (
  <div
    className="form-input-group"
  >
    <input
      className="form-input"
      onChange={ handleChange }
      { ...etcProps }
    />
    {
      label ?
        (
          <label
            className={ `${etcProps.value && etcProps.value.length ? 'shrink': ''} form-input-label` }
          >{ label }</label>
        )
        :null
    }
  </div>
)

export default FormInput
