import styled, { css } from "styled-components";

export const Button = styled.button`
    padding: .8rem 1.6rem;
    border: 2px solid ${({theme}) => theme.primary.main};
    border-radius: 50px;
    color: ${({theme}) => theme.primary.main};
    text-transform: capitalize;

    ${({primary}) => primary && css`
            color: ${({theme}) => theme.text.aux};
            background: ${({theme}) => theme.primary.main};

            &:hover {
                background: transparent;
                color: ${({theme}) => theme.primary.main};
            }
        `
    }

`;