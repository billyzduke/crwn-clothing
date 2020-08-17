export const addItemToCart = (cartItems, pid) => {
  let newCartItems = { [pid]: 1 }
  for (const cartItem in cartItems) {
    if (cartItems.hasOwnProperty(cartItem)) {
      if (cartItem === pid) {
        newCartItems[cartItem] += cartItems[cartItem]
      } else {
        newCartItems[cartItem] = cartItems[cartItem]
      }
    }
  }
  return newCartItems
}

export const clearItemFromCart = (cartItems, pid) => {
  let newCartItems = {}
  for (const cartItem in cartItems) {
    if (cartItems.hasOwnProperty(cartItem) && cartItem !== pid ) {
      newCartItems[cartItem] = cartItems[cartItem]
    }
  }
  return newCartItems
}

export const removeItemFromCart = (cartItems, pid) => {
  let newCartItems = {}
  for (const cartItem in cartItems) {
    if (cartItems.hasOwnProperty(cartItem)) {
      if (cartItem === pid) {
        const newQ = cartItems[cartItem] - 1
        if (newQ > 0) newCartItems[cartItem] = newQ
      } else {
        newCartItems[cartItem] = cartItems[cartItem]
      }
    }
  }
  return newCartItems
}
