import {
  allProducts,
  bakeryFilter,
  dairyFilter,
  hortifruitFilter,
  inputFilter
} from './action';

export const allProductsFilterThunk = () => dispatch => {
  dispatch(allProducts());
};

export const hortifruitFilterThunk = typeOfHortifruit => dispatch => {
  dispatch(hortifruitFilter(typeOfHortifruit));
};

export const bakeryFilterThunk = typeOfBakery => dispatch => {
  dispatch(bakeryFilter(typeOfBakery));
};

export const dairyFilterThunk = typeOfDairy => dispatch => {
  dispatch(dairyFilter(typeOfDairy));
};

export const inputFilterThunk = text => dispatch => {
  dispatch(inputFilter(text));
};
