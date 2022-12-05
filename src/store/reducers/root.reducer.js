import { combineReducers } from 'redux';
import { userReducer } from './auth.reducer';
import { cartReducer } from './cart.reducer';
import { productReducer } from './product.reducer';

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  user: userReducer
});