// <HomePage />
import React from 'react'

/* SASS/SCSS */
// import './index.scss'
/* styled-components */
import { HomePageContainer } from './styled'

import CatalogPreview from 'components/catalog-preview'

const HomePage = () => (
  <HomePageContainer>
    <CatalogPreview />
  </HomePageContainer>
)

export default HomePage
