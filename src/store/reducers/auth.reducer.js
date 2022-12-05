import { setLoginUser } from "../actions/auth.action";

const initState = {
  userDetails: {}
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case setLoginUser:
      return {
        userDetails: action.payload.userDetails 
      }
    default:
      return state
  }
};