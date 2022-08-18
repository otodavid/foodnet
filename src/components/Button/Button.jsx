import styled, { css } from 'styled-components';

export function Button({ children, ...others }) {
  return <StyledButton {...others}>{children}</StyledButton>;
}



/**
 * STYLED COMPONENTS
 */
//
const StyledButton = styled.button`
  padding: 0.8rem 1.6rem;
  border: 2px solid ${({ theme }) => theme.primary.main};
  border-radius: 50px;
  color: ${({ theme }) => theme.primary.main};
  text-transform: capitalize;

  ${(props) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.text.aux};
      background: ${({ theme }) => theme.primary.main};

      &:hover {
        background: transparent;
        color: ${({ theme }) => theme.primary.main};
      }
    `}
`;
