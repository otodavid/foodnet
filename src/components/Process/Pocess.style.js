import styled from "styled-components";
import { bp } from "../../styles/breakpoints";

export const ProcessSection = styled.section`
    text-align: center;
    padding: 5rem 2rem;
    background-color: ${({theme}) => theme.light};
    position: relative;
    z-index: 99;

    & p, h2 {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Heading2 = styled.h2`
    text-align: center;
    text-transform: capitalize;
`;

export const CardList = styled.div`
    margin: 3rem auto;
    padding: 0rem 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
    max-width: 950px;

    @media ${bp.tablet} {
        padding: 0 2rem;
    }
`;
