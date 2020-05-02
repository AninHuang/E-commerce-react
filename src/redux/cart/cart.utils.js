export const addItemToCart = (cartItems, cartItemToAdd) => {
  // 確認新增的是否為已存在之項目
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // 若是第一次新增項目，則附加一屬性 quantity
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
