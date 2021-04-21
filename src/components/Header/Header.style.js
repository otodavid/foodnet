import { Link } from "react-router-dom";
import styled from "styled-components";
import { bp } from "../../styles/breakpoints";

export const HeaderSection = styled.header`
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 2.5rem;
    z-index: 4;

    @media ${bp.desktop} {
        width: 75vw;
        top: 30px;
        padding: 1.5rem 0 0 7rem;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transform: translateX(100vw);
    transition: transform .4s;

    &.active {
        transform: translateX(0vw);
    }

    @media ${bp.desktop} {
        position: relative;
        width: auto;
        height: auto;
        transform: translateX(0vw);
    }
`;

export const Logo = styled(Link)`
    color: ${({theme}) => theme.primary};
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.5rem;
`; 

export const Nav = styled.ul`
    margin-left: auto;
    width: 60%;
    height: 100%;
    padding: 80px 2rem;
    background-color: ${({theme}) => theme.light};
    transition: box-shadow .3s;

    & li {
        margin-bottom: 1rem;
    }

    ${Overlay}.active & {
        box-shadow: 0 0 0 800px rgb(0,0,0,0.7);
    }

    @media ${bp.desktop} {
        display: flex;
        padding: 0;
        padding-right: 2rem;
        width: 100%;
        background-color: transparent;
    }
`;

export const NavLink = styled(Link)`
    padding: .5rem 1rem;
    font-size: 24px;
    color: ${({theme}) => theme.text};

    @media ${bp.desktop} {
        font-size: 1rem;
    }
`;

export const MenuIcon = styled.button` 
    position: relative;
    z-index: 5;
    color: ${({theme}) => theme.light};

    & i {
        font-size: 20px;
    }

    & .fa-times {
        color: ${({theme}) => theme.text};
    }

    @media ${bp.desktop} {
        display: none;
    }
`;