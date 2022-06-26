import { addToCart, removeFromCart } from './actions';

export const addToCartThunk = product => dispatch => {
  const list = JSON.parse(localStorage.getItem('@cart/items')) || [];
  list.push(product);

  localStorage.setItem('@cart/items', JSON.stringify(list));

  dispatch(addToCart(product));
};

export const removeFromCartThunk = id => (dispatch, getStore) => {
  const { cart } = getStore();

  const LIST = cart.filter(product => product.id !== id);

  localStorage.setItem('@cart/items', JSON.stringify(LIST));

  dispatch(removeFromCart(LIST));
};
