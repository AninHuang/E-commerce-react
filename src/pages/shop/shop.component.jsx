import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { firestore } from "../../firebase/firebase.utils";

// Class based Component
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  // Try to comply with DRY principle, put the code components shared in the nearest ancestor
  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    // Whenever the collection ref updates or whenever this code gets run for the first time,
    // the collectionRef will send the snapshot representing the code of our collection objects array at the time when this code renders
    collectionRef.onSnapshot(async (snapshot) => {
      console.log(snapshot); // QuerySnapshot
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

// Functional Component
// const ShopPage = ({ match }) => {
//   console.log(match); // { path: "/shop", url: "/shop", isExact: true, params: {} }

//   return (
//     <div className="shop-page">
//       <Route exact path={`${match.path}`} component={CollectionsOverview} />
//       <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//   );
// };

export default ShopPage;
// ShopPage is a simple non-connected component now.
// We will have the child component of the ShopPage be connected
