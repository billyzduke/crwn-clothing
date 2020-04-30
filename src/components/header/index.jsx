// <Header />
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './styled'

import { auth } from 'firebase-utils'
import CartIcon from 'components/cart-icon'
import CartDropdown from 'components/cart-dropdown'
import { ReactComponent as Logo } from 'assets/crown.svg'
import { selectCartVisible } from 'stores/cart/selectors'
import { selectCurrentUser } from 'stores/user/selectors'
import { clearCart } from 'stores/cart/actions'

const Header = ({ currentUser, visible, clearCart }) => (
  <HeaderContainer>
    <LogoContainer
      to="/"
      onClick={ clearCart }
    >
      <Logo
        className="logo"
      />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink
        to="/shop"
      >
        Shop
      </OptionLink>
      <OptionLink
        to="/contact"
      >
        Contact
      </OptionLink>
      {
        currentUser ?
          <OptionLink
            as='div'
            onClick={ () => auth.signOut() }
          >Sign Out</OptionLink>
          :
          <OptionLink
            to="/auth"
          >Sign In</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      visible ?
        <CartDropdown />
        :
        null
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  visible: selectCartVisible
})

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
