import React from "react";

import "./custom-buttom.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
    {/* children -> Get what's placed more code between CustomButton tag */}
  </button>
);

export default CustomButton;
