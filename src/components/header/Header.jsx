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

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <span>KARTUALS</span>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          <h3 className="link">SHOP</h3>
        </Link>
        <Link to="/shop" className="option">
          <h3 className="link">CONTACT</h3>
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
        <CartIcon />
        <div className="mobile_drawer">
          <TemporaryDrawer anchor />
        </div>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
