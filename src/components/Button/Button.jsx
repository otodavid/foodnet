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
  border-radius: 1rem;
  color: ${({ theme }) => theme.primary.main};
  text-transform: capitalize;

  ${(props) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.text.aux};
      background: ${({ theme }) => theme.primary.main};
      border-color: transparent;

      &:hover {
        background: rgb(11, 70, 48, 0.9);
        box-shadow: 2px 4px 7px 1px rgb(11, 70, 48, 0.2);
        transition: background-color 0.2s;
      }
    `}
`;
