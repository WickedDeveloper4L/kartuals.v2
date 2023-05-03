import React from "react";
import "./collectionItem.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { wishItem, removeItem } from "../../redux/wishlist/wishlist.reducer";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Rating } from "@mui/material";
import { IoMdRemoveCircle } from "react-icons/io";
const CollectionItem = ({
  item,
  addItem,
  addItemToWishlist,
  wishlist,
  removeItemWishlist,
}) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image_con">
        <img alt="item" className="image" src={imageUrl} />
        <div className="controls">
          <span className="tag">
            <span className="tag_text">Sales!</span>
          </span>
          <div className="control_icons">
            {wishlist ? (
              <span
                className="control_con_pad"
                onClick={() => removeItemWishlist(item)}
              >
                <IoMdRemoveCircle className="control_icon" />
              </span>
            ) : (
              <span
                className="control_con_pad"
                onClick={() => addItemToWishlist(item)}
              >
                <AiOutlineHeart className="control_icon" />
              </span>
            )}
            <span className="control_con_pad" onClick={() => addItem(item)}>
              <BsFillBagPlusFill className="control_icon" />
            </span>
          </div>
        </div>
      </div>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <div className="price_con">
          <div className="prices">
            <span className="price slash">{`${"$"}${price}`}</span>
            <span className="price">→ {`${"$"}${price - 10}`}</span>
          </div>
          <Rating name="read-only" value={10} readOnly fontSize="inherit" />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addItemToWishlist: (item) => dispatch(wishItem(item)),
  removeItemWishlist: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
