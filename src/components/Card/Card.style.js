import styled from "styled-components";

export const CardContainer = styled.div`
    flex: 1 1 250px;
    padding: 3.5rem 1.5rem;
    background-color: ${({theme}) => theme.background};
    border-radius: 10px;
    box-shadow: 3px 6px 10px 0px rgba(0,0,0,0.1);
`;

export const SvgWrapper = styled.div`
    width: 100%;
    margin-bottom: 2rem;

    svg {
        width: 50px;
        height: 50px;
        fill: ${({theme}) => theme.primary};
    }
`;
export const CardTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: .5rem;
    color: ${({theme}) => theme.secondary};
`;
// export const CardContainer = styled.div`

// `;
// export const CardContainer = styled.div`

// `;