import styled from "styled-components";
import { Link } from "react-router-dom";

// A block of CSS that can be passed in styled components in order to avoid duplicated shared styles
// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

// 引用方法
// ${OptionContainerStyles}

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;
