import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 1.5px solid;
  outline: none;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.4s;

  font-size: 0.9rem;
  font-weight: bold;

  padding: 10px 20px;

  ${props => {
    switch (props.contentType) {
      case 'text':
        return css`
          background: var(--white-turquoise);
          color: var(--turquoise);
          border-color: var(--white-turquoise);

          &:hover {
            background: var(--turquoise);
            color: var(--white);
            border-color: var(--turquoise);
          }
        `;
      case 'icon':
        return css`
          background: var(--turquoise);
          color: var(--white);
          border-color: var(--turquoise);

          &:hover {
            background: var(--white-turquoise);
            color: var(--turquoise);
            border-color: var(--white-turquoise);
          }
        `;
    }
  }};
`;
export default StyledButton;
