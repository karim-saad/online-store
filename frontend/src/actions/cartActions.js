import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (productID, quantity) => async (
  dispatch,
  getState
) => {
  const { data } = await axios.get(`/api/products/${productID}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      quantity,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productID) => async (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productID });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
