// <FormButton />
import React from 'react'

import './index.scss'

const FormButton = ({ children, isGoogleSignIn, inverted, ...etcProps }) => (
  <button
    className={ `${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} form-button` }
    { ...etcProps }
  >
    { children }
  </button>
)

export default FormButton
