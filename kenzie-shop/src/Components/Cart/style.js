import styled, { keyframes } from 'styled-components';

const cartAnimate = keyframes`
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-5px);
    color: var(--turquoise);
  }
  100%{
    transform: translateY(0px);
  }
`;

const CartContainer = styled.div`
  height: 56px;
  width: 100%;
  max-width: 1000px;

  margin: 0 auto;
  padding: 20px 10px;
  gap: 2rem;

  background: var(--white);

  border: 1px solid var(--white);
  border-radius: 8px;

  box-shadow: 0px 4px 30px -10px var(--shadow);

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 1.4rem;

    color: var(--white-gray);

    animation: ${cartAnimate} 1s infinite ease-in;

    svg {
      color: var(--turquoise);

      transform: translateY(2px);

      margin: 0 10px;
    }
  }

  button {
    position: relative;

    span {
      position: absolute;
      top: 2px;
      right: 15px;
    }
  }

  @media (max-width: 380px) {
    p {
      font-size: 1.1rem;
      font-weight: 200;

      svg {
        margin: 0px 5px;
      }
    }
  }
`;

export default CartContainer;
