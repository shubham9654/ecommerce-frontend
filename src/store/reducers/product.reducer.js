import { setAllProducts, setSingleProduct } from "../actions/product.action";

const initState = {
  allProducts: [],
  selectedProduct: {}
};

export const productReducer = (state=initState, action) => {
  switch (action.type) {
    case setSingleProduct:
      return {
        ...state,
        selectedProduct: action.payload.data
      }
    case setAllProducts:
      return {
        ...state,
        allProducts: action.payload.data
      }
    default:
      return state
  }
};