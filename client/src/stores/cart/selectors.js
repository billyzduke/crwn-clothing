import { memoize, memoizeAs } from 'reselectie'

const selectCart = state => state.cart

export const selectCartItems = memoize(
  selectCart,
  cart => cart.cartItems
)

export const selectCartQuantiTotal = memoize(
  selectCartItems,
  cartItems =>
    Object.keys(cartItems).reduce(
      (Q, pid) =>
        Q + parseFloat(cartItems[pid] || 0),
      0
    )
)

export const selectCartVisible = memoize(
  selectCart,
  cart => cart.visible
)

export const selectCartPriceTotal = memoizeAs(
  (state, cartProducts) => selectCartItems(state),
  (cartItems, cartProducts) => cartProducts ? Object.entries(cartProducts).reduce(
    (T, [pid, cartItem]) => {
      return T + (cartItems[pid] * cartItem.price)
    },
    0
  ) : 0
)
