import React from "react";
import { connect } from "react-redux";
import { toggleCartDropdownHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartDropdownHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartDropdownHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

// 使用 Selector 寫法：
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

// 原本的寫法：
// const mapStateToProps = state => ({
//   itemCount: selectCartItemsCount(state)
// });

// const mapStateToProps = ({ cart: { cartItems } }) => {
//   console.log("Being called!"); // state 永遠都是新的物件，會一直觸發這裡的呼叫
//   // 解決方法：儲存或快取
//   // Memorization: the cacheing of the selectors value
//   // 借助函式庫 reselect，判斷 state 物件是否真的有改變才重新渲染
//   // to memoize and not re-render a component if the state value does not change
//   return {
//     itemCount: cartItems.reduce(
//       (accumulatedQuantity, cartItem) =>
//         accumulatedQuantity + cartItem.quantity,
//       0
//     )
//   };
// };

const mapDispatchToProps = dispatch => ({
  toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
