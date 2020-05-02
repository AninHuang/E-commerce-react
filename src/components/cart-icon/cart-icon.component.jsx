import React from "react";
import { connect } from "react-redux";
import { toggleCartDropdownHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartDropdownHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartDropdownHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
