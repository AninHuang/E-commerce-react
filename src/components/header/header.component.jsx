import React from "react";
// The ReactComponent import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename.
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from "./header.styles";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// 使用 Selector 寫法：
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// 簡潔 Destructure 的寫法：
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden
// });

// 原本的寫法：
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// });

export default connect(mapStateToProps)(Header);
