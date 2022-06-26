import styled from 'styled-components';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 10px;
  margin: 0 auto;
  gap: 1rem;

  width: 100%;
  max-width: 1000px;

  nav {
    display: flex;
    justify-content: space-between;

    width: 54%;
    height: 52px;

    button {
      font-size: 1.1rem;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 52px;
    width: 35%;

    input {
      width: 80%;
      height: 100%;

      color: var(--white-gray);
      background: var(--cream);

      border-radius: 8px;

      padding: 15px;

      font-size: 1.2rem;
    }

    button {
      height: 100%;
      border: none;
    }
  }

  @media (max-width: 800px) {
    nav {
      button {
        font-size: 1rem;

        padding: 10px;
      }
    }

    @media (max-width: 630px) {
      flex-direction: column;
      justify-content: center;

      nav {
        width: 100%;
        justify-content: space-evenly;
        flex-wrap: wrap;

        button {
          padding: 1% 3%;
        }
      }
      div {
        width: 95%;
        justify-content: center;
      }
    }
  }
`;

export default NavigationContainer;
