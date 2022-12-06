export const createPayment = "CREATE_PAYMENT";

export const createPaymentAction = (payload, callback) => ({
  type: createPayment,
  payload,
  callback
});
