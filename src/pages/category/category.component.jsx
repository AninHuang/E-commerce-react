import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./category.styles.scss";

const CategoryPage = ({ match }) => {
  console.log(match); // { path: "/shop/:categoryId", url: "/shop/hats", isExact: true, params: { categoryId: "hats" } }

  // Then we can use match.params.hats
  return (
    <div className="category">
      <h2>Category Page</h2>
    </div>
  );
};

export default CategoryPage;
