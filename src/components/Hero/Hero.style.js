import styled, { css } from "styled-components";
import bgImage from '../../assets/images/gallery6.jpg';
import { bp } from "../../styles/breakpoints";

export const HeroSection = styled.div`
    position: relative;
    background: url(${bgImage}) center / cover no-repeat;
    color: ${({theme}) => theme.light};

    @media ${bp.laptop} {
        background: none;
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
    }
`;

export const ImageWrapper = styled.div`

    @media ${bp.laptop} {
        flex: 1 1 50%;
        position: relative;
        z-index: 2;
        padding-top: 9rem;
        order: 3;
        
        img {
            display: block;
            width: 80%;
            height: 80%;
            object-fit: contain;
            margin-right: 10%;
            margin-left: auto;
        }
    }

    @media ${bp.desktop} {
        
        img {
            width: 85%;
            height: 85%;
        }
    }
`;

export const GreenDiv = styled.div`
    position: absolute;
    top: -100px;
    right: -50px;
    width: 45%;
    height: 200%;
    z-index: 0;
    transform: rotateZ(35deg);
    background: linear-gradient(to bottom, ${({theme}) => theme.primary}, #3d3d3d);

    @media ${bp.desktop} {
        right: -200px;
        width: 50%;
    }
`;

export const HeroContent = styled.div`
    text-align: center;
    width: 80%;
    margin: 0 auto;
    padding: 11rem 0 8rem;

    & h1, & p {
        max-width: 500px;
        margin: 0 auto;

        @media ${bp.desktop} {
            padding-left: 0;
        }
    }

    h1 {
        text-transform: capitalize;
        color: ${({theme}) => theme.light};

        @media ${bp.laptop} {
            color: ${({theme}) => theme.secondary};
            margin: 0;
        }
    }

    p {
        margin: 1rem auto;

        @media ${bp.laptop} {
            margin: 1rem 0;
            width: 91%;
        }
    }

    @media ${bp.laptop} {
        flex: 1 1 50%;
        padding: 15rem 1rem 7rem 6rem;
        text-align: left;
    }

    @media ${bp.desktop} {
        padding-left: 9rem;
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
