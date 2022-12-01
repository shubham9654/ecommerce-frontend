import { setProducts } from "../actions/product.action";

const initState = [];

export const productReducer = (state=initState, action) => {
  switch (action.type) {
    case setProducts:
      return action.payload.data
    default:
      return state
  }
};