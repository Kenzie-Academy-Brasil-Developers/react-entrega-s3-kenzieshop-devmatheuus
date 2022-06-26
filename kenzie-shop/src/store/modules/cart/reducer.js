import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionsTypes';

const INITIAL_STATE = JSON.parse(localStorage.getItem('@cart/items')) || [];

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;

      return [...state, product];

    case REMOVE_PRODUCT:
      const { list } = action;

      return list;

    default:
      return state;
  }
};

export default cartReducer;
