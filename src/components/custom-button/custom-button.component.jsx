import React from "react";

import "./custom-buttom.styles.scss";

import { CustomButtonContainer } from "./custom-buttom.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

// const CustomButton = ({
//   children,
//   isGoogleSignIn,
//   inverted,
//   ...otherProps
// }) => (
//   // Always render class custom-button
//   <button
//     className={`${inverted ? "inverted" : ""} ${
//       isGoogleSignIn ? "google-sign-in" : ""
//     } custom-button`}
//     {...otherProps}
//   >
//     {children}
//     {/* children -> Get what's placed more code between CustomButton tag */}
//   </button>
// );

export default CustomButton;
