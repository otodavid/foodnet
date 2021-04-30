import { Link } from "react-router-dom";
import styled from "styled-components";
import { bp } from "../../styles/breakpoints";

export const FooterSection = styled.section`
    background-color: ${({theme}) => theme.neutral.light};
    text-align: center;
    padding: 4rem 2rem 2rem;

    @media ${bp.tablet} {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 3rem;
    }

    @media ${bp.laptop} {
        padding-left: 8rem;
        padding-rightt: 8rem;
    }

    @media ${bp.laptop} {
        padding-left: 12rem;
        padding-right: 12rem;
    }
`;

export const FooterMenu = styled.ul`
    margin: 1rem 0;

    @media ${bp.tablet} {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
`;

export const FooterLink = styled(Link)`
    color: ${({theme}) => theme.text.secondary};
    padding: .5rem;
    font-weight: 500;

    &:hover {
        color: ${({theme}) => theme.primary.main};
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    width: 100px;
    margin: 0 auto;
    color: ${({theme}) => theme.secondary};

    i {
        font-size: 20px;

        &:hover {
            color: ${({theme}) => theme.primary.main};
            cursor: pointer;
        }
    }

    @media ${bp.tablet} {
        margin: 0;
    }
`;

export const Copyright = styled.div`
    width: 100%;
    padding: 2rem 0 1rem;
    text-align: center;
    background-color: ${({theme}) => theme.neutral.light};
    color: ${({theme}) => theme.text.secondary}; 
`;
