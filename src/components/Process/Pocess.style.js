import styled from "styled-components";

export const ProcessSection = styled.section`
    text-align: center;
    padding: 3rem 2rem;
    background-color: ${({theme}) => theme.light};
`;

export const Heading2 = styled.h2`
    text-align: center;
    text-transform: capitalize;
`;

export const CardList = styled.div`
    margin: 3rem auto;
    padding: 0rem 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
    justify-items: center;
    max-width: 1000px;
`;
