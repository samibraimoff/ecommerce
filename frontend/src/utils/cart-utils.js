export const addDecimals = (num) => {
  return Number((Math.round(num * 100) / 100).toFixed(2));
};

export const updateCart = (state) => {
  // calc items price
  state.itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // calc shipping price, if order is > 100$ then shipping is free, otherwise its 10$
  state.shippingPrice = state.itemsPrice > 100 ? 0 : 10;

  // calc tax (15%)
  state.taxPrice = 0.15 * state.itemsPrice;

  // calc total price
  state.totalPrice = addDecimals(
    state.itemsPrice + state.shippingPrice + state.taxPrice,
  );

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
