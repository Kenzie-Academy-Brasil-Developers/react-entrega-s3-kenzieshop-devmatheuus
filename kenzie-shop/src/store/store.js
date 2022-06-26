import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import productsReducer from './modules/products/reducer';
import cartReducer from './modules/cart/reducer';

import thunk from 'redux-thunk';

const REDUCERS = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const STORE = createStore(REDUCERS, applyMiddleware(thunk));

export default STORE;
