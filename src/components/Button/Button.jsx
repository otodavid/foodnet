import React from 'react';
import styled, { css } from 'styled-components';

export const Button = React.forwardRef((props, ref) => {
  const { children, ...others } = props;
  return (
    <StyledButton ref={ref} {...others}>
      {children}
    </StyledButton>
  );
});

// export default forwardRef(Button);

/**
 * STYLED COMPONENTS
 */
//
const StyledButton = styled.button`
  padding: 0.8em 1em;
  border: 1px solid ${({ theme }) => theme.primary.main};
  border-radius: 0.625rem;
  color: ${({ theme }) => theme.primary.main};
  text-transform: capitalize;
  font-size: 1rem;
  text-align: center;

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
