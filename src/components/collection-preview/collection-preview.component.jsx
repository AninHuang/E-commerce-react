import React from "react";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {/* 效能問題：當 CollectionPreview 被重新渲染，以下區塊也會重 render */}
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;