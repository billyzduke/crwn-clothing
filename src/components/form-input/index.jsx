// <FormInput />
import React from 'react'
import { Field, ErrorMessage } from 'formik'

import './index.scss'

const FormInput = ({ name, label, type, value }) => (
  <div
    className="form-input-group"
  >
    <Field
      className="form-input"
      name={ name }
      type={ type }
    />
    {
      label ?
        (
          <label
            htmlFor={ name }
            className={ `${value.length ? 'shrink': ''} form-input-label` }
          >{ label }</label>
        )
        : null
    }
    <ErrorMessage
      name={ name }
    />
  </div>
)

export default FormInput
