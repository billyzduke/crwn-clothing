// <CollectionHero />
import React from 'react'
import { withRouter } from 'react-router-dom'

import './index.scss'

const CollectionHero = ({ name, heroImgUrl, heroSize, history, match }) => (
  <div
    className={ heroSize ? `${heroSize} menu-item` : `menu-item` }
    onClick={ () => history.push(`${match.url}shop/${encodeURI(name)}`) }
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
      >{ name }</h1>
      <span
        className="subtitle"
      >Shop Now</span>
    </div>
  </div>
)

export default withRouter(CollectionHero)
