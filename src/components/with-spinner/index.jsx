import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './styles'

const WithSpinner = WrappedComponent => ({ isLoading, ...etcProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent
      { ...etcProps }
    />
  )
}

export default WithSpinner
