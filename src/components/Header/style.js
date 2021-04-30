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
    align-items: center;
    padding: 1.5rem 2.5rem;
    z-index: 4;

    @media ${bp.tablet} {
        top: 30px;
        padding: 1.5rem 2rem 0 4rem;
    }

    @media ${bp.laptop} {
        width: 83vw;
        padding: 1.5rem 0rem 0 6rem;
    }

    @media ${bp.desktop} {
        padding-left: 9rem;
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

    @media ${bp.tablet} {
        position: relative;
        width: auto;
        height: auto;
        transform: translateX(0vw);
        flex: 2;
    }
`;

export const Logo = styled(Link)`
    color: ${({theme}) => theme.primary.main};
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.5rem;
`; 

export const Nav = styled.ul`
    margin-left: auto;
    width: 60%;
    height: 100%;
    padding: 100px 2rem;
    background-color: ${({theme}) => theme.neutral.light};
    transition: box-shadow .3s;

    & li {
        margin-bottom: 1rem;
    }

    ${Overlay}.active & {
        box-shadow: 0 0 0 800px rgb(0,0,0,0.7);
    }

    @media ${bp.tablet} {
        display: flex;
        justify-content: flex-end;
        padding: 0;
        padding-right: 2rem;
        width: 100%;
        background-color: transparent;

        & li {
            margin-bottom: 0;
        }
    }
`;

export const NavLink = styled(Link)`
    padding: .5rem 1rem;
    font-size: 24px;
    color: ${({theme}) => theme.text.main};

    @media ${bp.tablet} {
        font-size: 1rem;
        color: ${({theme}) => theme.text.aux};
        font-weight: 500;
        position: relative;
        
        &::after {
            position: absolute;
            content: "";
            bottom: 0;
            left: 1rem;
            width: 0;
            height: 2px;
            background-color: ${({theme}) => theme.primary.main};
            transition: width .3s ease;
        }

        &:hover::after {
            width: 50%;
        }
    }

    @media ${bp.laptop} {
        color: ${({theme}) => theme.text.main};

        &:hover {
            color: ${({theme}) => theme.text.secondary}
        }
    }
`;

export const ControlBtns = styled.div`
    flex: 0 1 60px;
    display: flex;
    justify-content: space-between;
`;

export const MenuIcon = styled.button` 
    position: relative;
    z-index: 5;
    color: ${({theme}) => theme.text.aux};

    & i {
        font-size: 20px;
    }

    & .fa-times {
        color: ${({theme}) => theme.text.secondary};
    }

    @media ${bp.tablet} {
        display: none;
    }
`;

export const ThemeChanger = styled.button`
    color: ${({theme}) => theme.text.aux};

    @media ${bp.laptop} {
        color: ${({theme}) => theme.neutral.dark};
    }
`;