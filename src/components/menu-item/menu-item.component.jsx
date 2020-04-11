import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

// 設置 withRouter(MenuItem)，因而可取得 history, match ..等資訊
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
// 用以避免重複 props 一直在組件之間向下傳，中間的組件可能無需用到，導致此現象為 Prop drilling (also called "threading")
// withRouter -> Get access to the history object's properties and the closest <Route>'s match via the withRouter higher-order component.
// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
