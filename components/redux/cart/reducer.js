export default function reducer(state = [], action) {
  switch (action.type) {
    case "DELETE_CART":
      return [...action.payload];
    case "ADD_CART":
      return [...action.payload];
    case "EDIT_CART":
      return [...action.payload];
    default:
      return state;
  }
}
