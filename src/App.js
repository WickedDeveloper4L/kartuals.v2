import "./App.scss";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Checkout from "./pages/checkout/Checkout";
import { checkUserSession } from "./redux/user/user.actions";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import Wishlist from "./pages/wishlist/Wishlist";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";
import { selectCollectionItems } from "./redux/shop/shop.selector";

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
      </Switch>
    </div>
  );
};
export default App;
