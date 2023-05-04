import React from "react";
import "./wishlist.scss";
import { useSelector } from "react-redux";
import { selectWishlistItems } from "../../redux/wishlist/wishlist.selectors";
import CollectionItem from "../../components/collection-item/CollectionItem";

const Wishlist = () => {
  const wishlist = useSelector(selectWishlistItems);
  return (
    <div className="wishlist_page">
      <h2 className="title">My wishlist</h2>
      <div className="items">
        {wishlist.map((item) => (
          <CollectionItem wishlist={true} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
