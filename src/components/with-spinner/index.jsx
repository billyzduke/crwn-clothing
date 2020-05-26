import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './styles'

const WithSpinner = WrappedComponent => ({ renderReady, ...etcProps }) => {
  return renderReady ? (
    <WrappedComponent
      { ...etcProps }
    />
  ) : (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
}

export default WithSpinner
