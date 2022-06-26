import Header from '../../Components/Header'
import StyledButton from '../../Components/Button/style'

import { ContentContainer, TotalContainer } from './style'
import { FiTrash2, FiShoppingBag } from 'react-icons/fi'

import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartThunk } from '../../store/modules/cart/thunk'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Checkout = () => {

  const { cart } = useSelector(item => item)

  const DISPATCH = useDispatch()

  const totalCart = () => cart.reduce((accumulator, {price}) => accumulator + price, 0).toFixed(2)

  const handleRemove = (id) =>{
    try{
      DISPATCH(removeFromCartThunk(id))
      toast.success('Produto removido')
    }catch{
      toast.error('Houve um erro')
    }
  }

  return (
    <>
      <Header />
      <ContentContainer>
        <ul>
          {cart.length > 0 ? (
              cart.map(product =>(
                <li key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <p>{product.name}</p>
                  <div>
                    <h3>R$ {product.price.toFixed(2)}</h3>
                    <StyledButton
                     contentType="icon"
                     onClick={() => handleRemove(product.id)}
                    >
                      <FiTrash2 size={13}/>
                    </StyledButton>
                  </div>
                </li>
              ))
          ) : (
            <div className='null-cart'>
              <h2>Voltar as compras</h2>
              <Link to='/'>
                <FiShoppingBag size={20}/>
              </Link>
            </div>
          )}
        </ul>
          {cart.length > 0 && (
            <TotalContainer>
              <h2>Resumo do pedido</h2>
              <div>
                <p>{cart.length} produtos</p>
                <span>R$ {totalCart()}</span>
              </div>
              <StyledButton contentType='icon'>Finalizar Pedido</StyledButton>
            </TotalContainer>
        )}
      </ContentContainer>
    </>
  )
}

export default Checkout
