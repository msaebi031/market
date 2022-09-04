import { combineReducers } from "redux";
import product from "../product/reducer";
import cart from "../cart/reducer";

export const combinedReducer = combineReducers({
  product,
  cart,
});
