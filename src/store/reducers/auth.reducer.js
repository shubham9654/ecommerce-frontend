import { loginUser } from "../actions/auth.action";

const initState = {
  userDetails: {}
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case loginUser:
      return {
        ...action.payload
      }
    default:
      return state
  }
};