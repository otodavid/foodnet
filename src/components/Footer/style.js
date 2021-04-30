import { Link } from "react-router-dom";
import styled from "styled-components";
import { bp } from "../../styles/breakpoints";
import { Button } from "../Button/style";

export const FooterSection = styled.section`
    padding-top: 5rem;
    text-align: center;
`;

export const Newsletter = styled.div`
    padding: 0 2rem;
    margin-bottom: 2rem;
`;

export const NewsletterIntro = styled.div`
    max-width: 500px;
    margin: 0 auto;
`;

export const SubscribeForm = styled.div`
    margin: 0 auto;
    max-width: 600px;
    margin-top: 2rem;

    ${Button} {
        width: 100%;
        margin-top: 1.2rem;

        @media ${bp.tablet} {
            margin-top: 0;
            flex: 1 0 25%;
        }
    }

    @media ${bp.tablet} {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const TextField = styled.input.attrs(props => ({
    type: props.type || "text",
}))`
    border: 2px solid ${({theme}) => theme.primary.main};
    border-radius: 50px;
    width: 100%;
    color: ${({theme}) => theme.text.main};
    transition: box-shadow .5s;

    &:hover, &:focus {
        box-shadow: 0 0 0 1px ${({theme}) => theme.primary.main};
    }

    @media ${bp.tablet} {
        flex: 1 0 70%;
        margin-right: 1.5rem;
    }
`;

export const FooterBottom = styled.div`
    padding-top: 2rem;

    @media ${bp.tablet} {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        max-width: 1100px;
        margin: 0 auto;
        padding: 2rem;
    }

    @media ${bp.laptop} {
        padding: 2rem 6rem;
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
    color: ${({theme}) => theme.text.main};
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
    padding: 2rem 0 3rem;
    text-align: center;
    background-color: ${({theme}) => theme.neutral.light};
    /* background: #ecf0bc; */
    color: ${({theme}) => theme.text.secondary}; 
`;
