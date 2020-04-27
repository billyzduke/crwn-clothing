import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartQuantiTotal = createSelector(
  [selectCartItems],
  cartItems =>
    Object.keys(cartItems).reduce(
      (Q, pid) =>
        Q + parseFloat(cartItems[pid] || 0),
      0
    )
)

export const selectCartVisible = createSelector(
  [selectCart],
  cart => cart.visible
)

export const selectCartPriceTotal = cartProducts => createSelector(
  [selectCartItems],
  cartItems =>
    Object.entries(cartProducts).reduce(
      (T, [pid, cartItem]) => {
        return T + (cartItems[pid] * cartItem.price)
      },
      0
    )
)
