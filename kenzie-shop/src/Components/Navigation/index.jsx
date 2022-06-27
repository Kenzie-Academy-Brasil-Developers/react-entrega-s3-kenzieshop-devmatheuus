import React, { useState } from 'react';

import NavigationContainer from './style';
import StyledButton from '../Button/style';

import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import {
  allProductsFilterThunk,
  bakeryFilterThunk,
  dairyFilterThunk,
  hortifruitFilterThunk,
  inputFilterThunk
} from '../../store/modules/products/thunk';

const Navigation = () => {
  const [teste, setTeste] = useState('');

  const DISPATCH = useDispatch();

  const handleFilter = section => {
    switch (section) {
      case 'Hortifruit':
        return DISPATCH(hortifruitFilterThunk(section));

      case 'Panificadora':
        return DISPATCH(bakeryFilterThunk(section));

      case 'Laticinios':
        return DISPATCH(dairyFilterThunk(section));

      default:
        return DISPATCH(allProductsFilterThunk());
    }
  };

  const handleInputFilter = e => {
    DISPATCH(inputFilterThunk(e.target.value));
  };

  return (
    <NavigationContainer>
      <nav>
        <StyledButton contentType="text" onClick={handleFilter}>
          Produtos
        </StyledButton>
        <StyledButton
          contentType="text"
          onClick={() => handleFilter('Hortifruit')}
        >
          Hortifruit
        </StyledButton>
        <StyledButton
          contentType="text"
          onClick={() => handleFilter('Panificadora')}
        >
          Panificadora
        </StyledButton>
        <StyledButton
          contentType="text"
          onClick={() => handleFilter('Laticinios')}
        >
          Laticínios
        </StyledButton>
      </nav>
      <div>
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={e => handleInputFilter(e)}
        />
        <StyledButton
          contentType="icon"
          //  onClick={handleInputFilter}
        >
          <FiSearch size={15} />
        </StyledButton>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
