import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  console.log(match); // { path: "/shop/:collectionId", url: "/shop/hats", isExact: true, params: { collectionId: "hats" } }

  // Then we can use match.params.collectionId
  return (
    <div className="category">
      <h2>Collection Page</h2>
    </div>
  );
};

export default CollectionPage;
