// <Header />
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './index.scss'

import { auth } from 'firebase-utils'
import CartIcon from 'components/cart-icon'
import CartDropdown from 'components/cart-dropdown'
import { ReactComponent as Logo } from 'assets/crown.svg'
import { selectCartVisible } from 'stores/cart/selectors'
import { selectCurrentUser } from 'stores/user/selectors'

const Header = ({ currentUser, visible }) => (
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
      <CartIcon />
    </div>
    {
      visible ?
        <CartDropdown />
        :
        null
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  visible: selectCartVisible
})

export default connect(mapStateToProps)(Header)
