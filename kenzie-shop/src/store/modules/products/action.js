import {
  HORTIFRUIT,
  INPUT,
  LATICINIOS,
  PANIFICADORA,
  TODOS
} from './actionsTypes';

export const allProducts = () => ({
  type: TODOS
});

export const hortifruitFilter = typeOfHortifruit => ({
  type: HORTIFRUIT,
  payload: typeOfHortifruit
});

export const bakeryFilter = typeOfBakery => ({
  type: PANIFICADORA,
  payload: typeOfBakery
});

export const dairyFilter = typeOfDairy => ({
  type: LATICINIOS,
  payload: typeOfDairy
});
export const inputFilter = text => ({
  type: INPUT,
  payload: text
});
