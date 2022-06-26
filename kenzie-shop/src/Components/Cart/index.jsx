import React from 'react'

import CartContainer from './style'

import { FiAlertCircle, FiShoppingCart } from 'react-icons/fi'
import StyledButton from '../Button/style'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cart = useSelector(({cart}) => cart)
  
  
  return (
    <CartContainer>
      <p>
        <FiAlertCircle />
        Desconto especial na primeira compra
      </p>  
      <Link to='/checkout'>
        <StyledButton contentType='icon'>
          <FiShoppingCart size={15}/>
          {cart.length > 0 && <span>{cart.length}</span>}
        </StyledButton>
      </Link>
    </CartContainer>
  )
}

export default Cart
