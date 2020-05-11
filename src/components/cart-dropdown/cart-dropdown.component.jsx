import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartDropdownHidden } from "../../redux/cart/cart.actions";

// Once you have connected your component in this way, your component receives props.dispatch.
// You may use it to dispatch actions to the store.
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("./checkout");
        dispatch(toggleCartDropdownHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

// 使用 Selector 寫法：
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// 原本的寫法：
// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
