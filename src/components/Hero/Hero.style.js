import styled, { css } from "styled-components";

export const HeroSection = styled.div`
    position: relative;
    padding-top: 7rem;
    padding-bottom: 5rem;
`;

export const ImageWrapper = styled.div`
    width: 40%;
    margin: 0 auto;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const GreenDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    z-index: -1;
    transform: rotateZ(45deg) translate(-155px, 20px);
    background: linear-gradient(to bottom, ${({theme}) => theme.primary} 40%, transparent 80%);
`;

export const HeroContent = styled.div`
    text-align: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;

    h1 {
        text-transform: capitalize;
    }

    p {
        margin-bottom: 1rem;
    }
`;

export const Button = styled.button`
    background: transparent;
    padding: 1rem 1.6rem;
    border: 1px solid ${({theme}) => theme.primary};
    border-radius: 50px;
    color: ${({theme}) => theme.primary};
    text-transform: capitalize;

    ${({primary}) => primary && css`
            color: ${({theme}) => theme.light};
            background-color: ${({theme}) => theme.primary};
        `
    }

    ${HeroContent} & {
        margin: 0 auto;
    }
`;