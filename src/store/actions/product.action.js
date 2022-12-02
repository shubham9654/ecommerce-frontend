export const getSingleProduct = "GET_SINGLE_PRODUCT";
export const setSingleProduct = "SET_SINGLE_PRODUCT";
export const getAllProducts = "GET_ALL_PRODUCTS";
export const setAllProducts = "SET_ALL_PRODUCTS";

export const getSingleProductAction = (payload) => ({
  type: getSingleProduct,
  payload
});


export const setSingleProductAction = (payload) => ({
  type: setSingleProduct,
  payload
});

export const getAllProductsAction = (payload) => ({
  type: getAllProducts,
  payload
});


export const setAllProductAction = (payload) => ({
  type: setAllProducts,
  payload
});

