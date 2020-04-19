// <FormButton />
import React from 'react'

import './index.scss'

const FormButton = ({ children, isGoogleSignIn, ...etcProps }) => (
  <button
    className={ `${isGoogleSignIn ? 'google-sign-in' : ''} form-button` }
    { ...etcProps }
  >
    { children }
  </button>
)

export default FormButton
