import styled from "styled-components";
import { bp } from '../../styles/breakpoints';

export const GallerySection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
        "img-2 img-8 img-4"
        "img-2 img-6 img-6"
        "img-3 img-6 img-6"
        "img-3 img-5 img-5"
        "img-9 img-9 img-1"
        "img-10 img-7 img-7";
    gap: .5rem;

    @media ${bp.tablet} {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 300px);
        grid-template-areas: 
        "img-3 img-1 img-2 img-10"
        "img-3 img-7 img-9 img-9"
        "img-6 img-4 img-8 img-5";
    }
`;

export const GalleryContent = styled.div`

    &:first-of-type {
        grid-area: img-1;
    }

    &:nth-of-type(2) {
        grid-area: img-2;
    }

    &:nth-of-type(3) {
        grid-area: img-3;
    }

    &:nth-of-type(4) {
        grid-area: img-4;
    }

    &:nth-of-type(5) {
        grid-area: img-5;
    }

    &:nth-of-type(6) {
        grid-area: img-6;
    }

    &:nth-of-type(7) {
        grid-area: img-7;
    }

    &:nth-of-type(8) {
        grid-area: img-8;
    }

    &:nth-of-type(9) {
        grid-area: img-9;
    }
    &:last-of-type {
        grid-area: img-10;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;