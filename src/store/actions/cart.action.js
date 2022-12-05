export const addProductToCart = "ADD_PRODUCT_TO_CART";
export const updateProductToCart = "UPDATE_PRODUCT_TO_CART";

export const addProductToCartAction = (payload) => ({
  type: addProductToCart,
  payload
});


export const updateProductToCartAction = (payload) => ({
  type: updateProductToCart,
  payload
});
