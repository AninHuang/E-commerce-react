import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
// ShopPage is a simple non-connected component now.
// We will have the child component of the ShopPage be connected
