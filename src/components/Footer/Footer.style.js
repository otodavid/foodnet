import styled from "styled-components";
import { Button } from "../Hero/Hero.style";

export const FooterSection = styled.section`
    padding: 4rem 2rem 2rem;
    text-align: center;
`;

export const Newsletter = styled.div`
    margin-bottom: 2rem;
`;

export const NewsletterIntro = styled.div`
    
`;

export const SubscribeForm = styled.div`
    margin-top: 2rem;

    input {
        border: 2px solid ${({theme}) => theme.primary};
        border-radius: 50px;
        width: 100%;
        color: ${({theme}) => theme.text};
    }

    ${Button} {
        width: 100%;
        margin-top: 1.2rem;
    }
`;

export const FooterBottom = styled.div`
    padding-top: 2rem;
`;

export const FooterMenu = styled.ul`
    margin: 1rem 0;
`;

export const FooterLink = styled.div`
    padding: .5rem;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;
    width: 100px;

    i {
        font-size: 20px;
    }
`;

export const Copyright = styled.div`
    width: 100%;
    padding-top: 2rem;
    text-align: center;
`;
