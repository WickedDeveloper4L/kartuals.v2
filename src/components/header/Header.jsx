import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import TemporaryDrawer from "../utilities/Drawer";
import CartDrawer from "../utilities/CartDrawer";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <span className="webtitle">KARTUALS</span>
      </Link>
      <div className="options_con">
        <Link to="/shop" className="option">
          <h3 className="link">SHOP</h3>
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartDrawer anchor />
        <div className="mobile_drawer">
          <TemporaryDrawer anchor />
        </div>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
