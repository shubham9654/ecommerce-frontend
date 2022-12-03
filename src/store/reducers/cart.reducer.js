import { extractNum } from "../../utils/global.helper";
import { addCart } from "../actions/cart.action";

const initState = {
  products: [],
  cartQuantity: 0,
  totalPrice: 0
};

export const cartReducer = (state=initState, action) => {
  switch (action.type) {
    case addCart:
      return {
        products: [...state.products, action.payload.product],
        cartQuantity: state.cartQuantity + 1,
        totalPrice: state.totalPrice + (action.payload.quantity * extractNum(action.payload.product.price))
      }
    default:
      return state
  }
};
