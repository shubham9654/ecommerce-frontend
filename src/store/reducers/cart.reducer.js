import { extractNum } from "../../utils/global.helper";
import { addProductToCart, updateProductToCart } from "../actions/cart.action";

const initState = {
  products: [],
  cartQuantity: 0,
  totalPrice: 0
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case addProductToCart:
      return {
        products: [...state.products, action.payload.product],
        cartQuantity: state.cartQuantity + 1,
        totalPrice: state.totalPrice + (action.payload.quantity * extractNum(action.payload.product.price))
      }
    case updateProductToCart:
      return {
        ...action.payload
      }
    default:
      return state
  }
};
