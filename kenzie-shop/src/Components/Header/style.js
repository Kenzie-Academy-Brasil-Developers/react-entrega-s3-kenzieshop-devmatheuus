import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--white);
  box-shadow: 0px 4px 40px -20px var(--shadow);

  h3 {
    font-weight: 600;
    font-size: 1.6rem;

    color: var(--dark-gray);
  }
`;
export default StyledHeader;
