// <Header />
import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from 'firebase'

import { ReactComponent as Logo } from 'assets/crown.svg'

import './index.scss'

const Header = ({ currentUser }) => (
  <div
    className="header"
  >
    <Link
      className="logo-container"
      to="/"
    >
      <Logo
        className="logo"
      />
    </Link>
    <div
      className="options"
    >
      <Link
        className="option"
        to="/shop"
      >
        Shop
      </Link>
      <Link
        className="option"
        to="/contact"
      >
        Contact
      </Link>
      {
        currentUser ?
          <div
            className="option"
            onClick={ () => auth.signOut() }
          >Sign Out</div>
          :
          <Link
            className="option"
            to="/auth"
          >Sign In</Link>
      }
    </div>
  </div>
)

export default Header
