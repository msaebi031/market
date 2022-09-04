import { HYDRATE } from "next-redux-wrapper";
import { combinedReducer } from "./combinedReducer";

export const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      product: [...action.payload.product],
      cart:
        action.type == "ADD_CART"
          ? [...action.payload, ...state.cart]
          : [...action.payload.cart],
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
