import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (Q, cartItem) =>
        Q + cartItem.quantity,
      0
    )
)

export const selectCartVisible = createSelector(
  [selectCart],
  cart => cart.visible
)
