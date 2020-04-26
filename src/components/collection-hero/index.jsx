// <CollectionHero />
import React from 'react'
import { withRouter } from 'react-router-dom'

import './index.scss'

const CollectionHero = ({ ckey, heroImgUrl, heroSize, history, match }) => (
  <div
    className={ heroSize ? `${heroSize} menu-item` : `menu-item` }
    onClick={ () => history.push(`${match.url}shop/${ckey}`) }
  >
    <div
      className="background-image"
      style={ { backgroundImage: `url(${ heroImgUrl })` } }
    />
    <div
      className="content"
    >
      <h1
        className="title"
      >{ ckey }</h1>
      <span
        className="subtitle"
      >Shop Now</span>
    </div>
  </div>
)

export default withRouter(CollectionHero)
