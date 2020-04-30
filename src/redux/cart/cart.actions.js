import CartActionTypes from "./cart.types";

export const toggleCartDropdownHidden = () => ({
  type: CartActionTypes.TOGGLE_CARTDROPDOWN_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});