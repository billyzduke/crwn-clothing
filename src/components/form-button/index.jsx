// <FormButton />
import React from 'react'

import { FormButtonContainer } from './styled'

const FormButton = ({ children, ...etcProps }) => (
  <FormButtonContainer
    { ...etcProps }
  >
    { children }
  </FormButtonContainer>
)

export default FormButton
