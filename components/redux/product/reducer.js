export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...action.payload];
    case "EDIT_PRODUCT":
      return [...action.payload];
    default:
      return state;
  }
}
