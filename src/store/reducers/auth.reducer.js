import { setLoginUser } from "../actions/auth.action";

const initState = {
  userDetails: {},
  accessToken: '',
  isLogin: false
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case setLoginUser:
      return {
        userDetails: action.payload.userDetails.user,
        accessToken: action.payload.userDetails.accessToken,
        isLogin: true
      }
    default:
      return state
  }
};