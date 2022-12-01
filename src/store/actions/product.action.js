export const getProducts = "GET_PRODUCTS";
export const setProducts = "SET_PRODUCTS";

export const getProductsAction = () => ({
  type: getProducts,
  // callback
});


export const setProductAction = (value) => ({
  type: setProducts,
  payload: value
});

