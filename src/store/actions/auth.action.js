export const createUser = "CREATE_USER";
export const loginUser = "LOGIN_USER";
export const setLoginUser = "SET_LOGIN_USER";

export const createUserAction = (payload, callback) => ({
  type: createUser,
  payload,
  callback
});

export const loginUserAction = (payload, callback) => ({
  type: loginUser,
  payload,
  callback
});

export const setLoginUserAction = (payload, callback) => ({
  type: setLoginUser,
  payload,
  callback
});

