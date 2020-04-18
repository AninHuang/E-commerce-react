import React from "react";

import "./custom-buttom.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  // Always render class custom-button
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
    {/* children -> Get what's placed more code between CustomButton tag */}
  </button>
);

export default CustomButton;