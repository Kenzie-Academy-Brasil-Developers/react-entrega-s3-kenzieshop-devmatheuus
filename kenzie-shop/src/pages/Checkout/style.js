import styled from 'styled-components';

export const ContentContainer = styled.div`
  margin: 15px auto;

  width: 100%;
  max-width: 1300px;
  height: 80vh;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  ul {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    overflow-y: auto;

    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: var(--turquoise);
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 10px;
      padding: 15px;
      gap: 1rem;

      border-radius: 8px;

      transition: 0.4s;

      &:hover {
        box-shadow: 3px 3px 13px 1px var(--shadow-hover);
      }

      img {
        width: 20%;
        height: 100%;
      }

      p {
        font-size: 1.4rem;
        width: 60%;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 0.7rem;

        button {
          padding: 8px 15px;
        }

        h3 {
          color: var(--turquoise);
          font-size: 1.2rem;
          width: 110%;
        }
      }
    }
  }
  .null-cart {
    gap: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 80%;
    width: 100%;

    h2 {
      font-size: 3rem;
      color: var(--turquoise);
      text-align: center;
    }
    svg {
      color: var(--white);
      background: var(--turquoise);

      width: 250px;
      height: 35px;
      padding: 5px;
      border-radius: 5px;
    }
  }
  @media (max-width: 600px) {
    ul {
      align-items: center;

      li {
        width: 90%;
        img {
          width: 30%;
          min-width: 50px;
        }
        p {
          font-size: 1.1rem;
        }
      }
    }
  }
  @media (max-width: 550px) {
    ul {
      width: 50%;
      overflow-x: hidden;

      li {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        img {
          width: 100%;
          height: 100%;
        }

        p {
          font-size: 1.2rem;
          width: 80%;
          text-align: center;
        }

        div {
          width: 100%;

          display: flex;
          flex-direction: row;
          justify-content: space-between;

          gap: 0.7rem;

          button {
            padding: 5px 10px;
          }

          h3 {
            color: var(--turquoise);
            font-size: 1.1rem;
            width: 110%;
          }
        }
      }
    }
    .null-cart {
      svg {
        width: 100px;
      }
    }
  }
`;

export const TotalContainer = styled.div`
  width: 15%;
  height: 25%;

  margin-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 1rem;

  h2 {
    color: var(--turquoise);
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-between;

    font-size: 1.2rem;
  }
  button {
    font-size: 1.2rem;
  }

  @media (max-width: 900px) {
    width: 25%;
  }

  @media (max-width: 550px) {
    width: 35%;
  }
  @media (max-width: 390px) {
    button {
      font-size: 0.8rem;
    }
  }
`;
