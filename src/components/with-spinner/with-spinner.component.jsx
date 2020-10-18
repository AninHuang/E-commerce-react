import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

// Using HOC for reusing component logic
// 代入 Component 作為參數，並回傳一個新的元件
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
