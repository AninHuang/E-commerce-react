import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";

const ShopPage = ({ match }) => {
  console.log(match); // { path: "/shop", url: "/shop", isExact: true, params: {} }

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;
// ShopPage is a simple non-connected component now.
// We will have the child component of the ShopPage be connected
