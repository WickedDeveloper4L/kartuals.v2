import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { shopReducer } from "./shop/shop.reducer";
import { directoryReducer } from "./directory/directory.reducer";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { wishlistReducer } from "./wishlist/wishlist.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  wishlist: wishlistReducer,
});

export default persistReducer(persistConfig, rootReducer);
