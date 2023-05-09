import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import "./shop.scss";
import { PropagateLoader } from "react-spinners";

const collectionsOverviewContainer = lazy(() =>
  import("../../components/coolection-overview/CollectionsOverviewContainer")
);
const collectionContainer = lazy(() =>
  import("../collection/collectionContainer")
);
const Shop = ({ fetchCollectionsStart, match }) => {
  React.useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PropagateLoader color="#b87333" className="loader" />
          </div>
        }
      >
        <Route
          exact
          path={`${match.path}`}
          component={collectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={collectionContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(Shop);
