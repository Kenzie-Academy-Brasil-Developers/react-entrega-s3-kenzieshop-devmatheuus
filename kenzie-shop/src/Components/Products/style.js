import styled from 'styled-components';

const ItemsContainer = styled.ul`
  margin: 20px auto;

  width: 100%;
  max-width: 1000px;
  height: 55vh;
  max-height: 1000px;

  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: var(--turquoise);
  }

  li {
    margin: 10px;
    height: 90%;
    max-height: 360px;

    padding: 35px;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    transition: 1s;

    img {
      width: 100%;
      height: 50%;
      max-width: 200px;

      border-radius: 4px;
    }

    h3 {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--gray);
    }
    span {
      font-weight: 400;
      color: var(--white-gray);
    }

    &:hover {
      box-shadow: 3px 3px 13px 1px var(--shadow-hover);
    }
  }

  @media (max-width: 820px) {
    li {
      width: 30%;

      img {
        min-width: 150px;
      }
    }
  }

  @media (max-width: 630px) {
    margin: 0;
    max-width: fit-content;

    overflow-y: hidden;
    overflow-x: auto;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;

    height: 50vh;

    li {
      width: 100%;
      height: 95%;
    }
  }

  @media (max-width: 480px) {
    li {
      img {
        min-width: 160px;
      }
    }
  }
  @media (max-width: 260px) {
    li {
      img {
        min-width: 100%;
      }
    }
  }
`;
export default ItemsContainer;
