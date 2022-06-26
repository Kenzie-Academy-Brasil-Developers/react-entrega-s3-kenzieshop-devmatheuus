import React from 'react'

import ItemsContainer from './style'

import StyledButton from '../Button/style'

import { useDispatch, useSelector } from 'react-redux'
import { addToCartThunk } from '../../store/modules/cart/thunk'
import { toast } from 'react-toastify'

const Products = () => {

  const { products } = useSelector(state => state)
  
  const DISPATCH = useDispatch()

  return (
    <ItemsContainer>
       {products.map((product)=>(
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>R$ {product.price.toFixed(2)}</p>  
          <span>Secção - {product.section}</span>
          <StyledButton
           contentType='text'
            onClick={() => {
              toast.success('Produto adicionado')
              DISPATCH(addToCartThunk(product))
              product.id++
            } 
            }
          >
            Adicionar ao carrinho
          </StyledButton>
        </li>
       ))}
    </ItemsContainer>
  )
}

export default Products
