import { successTost } from "../../utils/reactTostify";

export const addCart = (newProduct) => {
  return { type: "ADD_CART", payload: newProduct };
};

export const editCart = (newProduct) => {
  return { type: "EDIT_CART", payload: newProduct };
};

export const deleteCart = (cart, id) => {
  const useDelete = [...cart];
  const removeCart = useDelete.filter((p) => p.id !== id);
  return { type: "DELETE_CART", payload: removeCart };
};

export const handleCheckCart = (product, cart, id) => {
  const productIndex = product.findIndex((p) => p.id === id);
  const prt = product[productIndex];

  const cartIndex = cart.findIndex((p) => p.id === id);
  if (cartIndex == "-1") {
    successTost("با موفقیت به سبد خرید اضافه شد");
    const carts = [...cart];
    carts.push(prt);
    return { type: "ADD_CART", payload: carts };
  } else {
    successTost("با موفقیت تعداد آن ویرایش شد");
    const crt = cart[cartIndex];
    crt.count = prt.count;
    const carts = [...cart];
    carts[cartIndex] = crt;
    return { type: "EDIT_CART", payload: carts };
  }
};
