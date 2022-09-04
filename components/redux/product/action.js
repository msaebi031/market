export const addProduct = (newProduct) => {
  return { type: "ADD_PRODUCT", payload: newProduct };
};

//=============================================
export const editProduct = (product, id, state2, taraz = "kg") => {
  const productIndex = product.findIndex((p) => p.id === id);
  const prt = product[productIndex];
  const products = [...product];
  if (state2) {
    if (taraz == "kg") {
      prt.count = (prt.count ? prt.count : 0) + 1;
    } else {
      prt.count = (prt.count ? prt.count : 0) + 100;
    }
  } else {
    if (taraz == "kg") {
      prt.count = (prt.count ? prt.count : 0) - 1;
    } else {
      prt.count = (prt.count ? prt.count : 0) - 100;
    }
  }
  products[productIndex] = prt;
  return { type: "EDIT_PRODUCT", payload: products };
};
