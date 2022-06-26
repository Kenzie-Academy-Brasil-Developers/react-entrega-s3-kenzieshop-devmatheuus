import products from '../../../dataBase/dataBase';
import {
  HORTIFRUIT,
  LATICINIOS,
  PANIFICADORA,
  TODOS,
  INPUT
} from './actionsTypes';

const INITIAL_STATE = products;

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS:
      return INITIAL_STATE;

    case HORTIFRUIT:
      const hortifruitFilter = INITIAL_STATE.filter(
        product => product.section === action.payload
      );
      return hortifruitFilter;

    case PANIFICADORA:
      const bakeryFilter = INITIAL_STATE.filter(
        product => product.section === action.payload
      );

      return bakeryFilter;

    case LATICINIOS:
      const dairyFilter = INITIAL_STATE.filter(
        product => product.section === action.payload
      );
      return dairyFilter;

    case INPUT:
      const inputFilter = INITIAL_STATE.filter(product =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return inputFilter;

    default:
      return INITIAL_STATE;
  }
};

export default productsReducer;
