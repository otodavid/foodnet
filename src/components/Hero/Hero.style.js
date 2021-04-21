import styled, { css } from "styled-components";
import bgImage from '../../assets/images/gallery6.jpg';
import { bp } from "../../styles/breakpoints";

export const HeroSection = styled.div`
    position: relative;
    background: url(${bgImage}) center / cover no-repeat;
    color: ${({theme}) => theme.light};

    @media ${bp.laptops} {
        background: none;
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
    }
`;

export const ImageWrapper = styled.div`
    flex: 1 1 50%;
    position: relative;
    z-index: 2;
    padding-top: 9rem;

    img {
        width: 90%;
        height: 90%;
        object-fit: contain;
    }

    @media ${bp.laptop} {
        order: 3;
    }
`;

export const GreenDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 25vw;
    height: 100%;
    z-index: 0;
    background-color: ${({theme}) => theme.primary} ;
`;

export const HeroContent = styled.div`
    text-align: center;
    width: 80%;
    margin: 0 auto;
    padding: 11rem 0 8rem;

    h1 {
        text-transform: capitalize;
        color: ${({theme}) => theme.light};

        @media ${bp.laptop} {
            color: ${({theme}) => theme.text};
        }
    }

    p {
        margin-bottom: 1rem;
    }

    @media ${bp.laptop} {
        flex: 1 1 50%;
        padding: 15rem 5rem 7rem 7rem;
        text-align: left;
    }
`;

export const Button = styled.button`
    background: transparent;
    padding: .8rem 1.6rem;
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
        margin: 2rem auto 0;
        
        @media ${bp.laptop} {
            margin: 2rem 0;
        }
    }

`;
