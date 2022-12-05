import { setLoginUser } from "../actions/auth.action";

const initState = {
  userDetails: {},
  accessToken: '',
  isAuthenticated: false
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case setLoginUser:
      return {
        userDetails: action.payload.userDetails.user,
        accessToken: action.payload.userDetails.accessToken,
        isAuthenticated: true
      }
    default:
      return state
  }
};