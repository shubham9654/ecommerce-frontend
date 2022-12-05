export const createUser = "CREATE_USER";
export const loginUser = "LOGIN_USER";

export const createUserAction = (payload, callback) => ({
  type: createUser,
  payload,
  callback
});
