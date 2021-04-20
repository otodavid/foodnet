import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderSection = styled.header`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 2.5rem;
    
`;

export const Logo = styled(Link)`
    color: ${({theme}) => theme.primary};
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.5rem;
`; 

export const Nav = styled.ul`
    display: none;
`;

export const NavLink = styled(Link)`

`;

export const MenuIcon = styled.button`
    color: ${({theme}) => theme.light}
`;