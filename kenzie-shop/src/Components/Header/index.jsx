import React from 'react'
import StyledHeader from './style';

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <h3>KENZIE SHOP</h3>
      </Link>
    </StyledHeader>
  )
}

export default Header;
