// <FormButton />
import React from 'react'

import './index.scss'

const FormButton = ({ children, ...etcProps }) => (
  <button
    className="form-button"
    { ...etcProps }
  >
    { children }
  </button>
)

export default FormButton
