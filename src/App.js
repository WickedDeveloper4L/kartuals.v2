import "./App.scss";
import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import { checkUserSession } from "./redux/user/user.actions";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionItems } from "./redux/shop/shop.selector";
import Footer from "./components/footer/Footer";
import { PropagateLoader } from "react-spinners";

const Homepage = lazy(() => import("./pages/homepage/Homepage"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const SignIn = lazy(() => import("./components/sign-in/SignIn"));
const SignUp = lazy(() => import("./components/sign-up/SignUp"));
const Shop = lazy(() => import("./pages/shop/Shop"));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const items = useSelector(selectCollectionItems);
  console.log(items);
  React.useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Switch>
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
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route
            exact
            path="/signIn"
            render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
          />
          <Route exact path="/signup" component={SignUp} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
