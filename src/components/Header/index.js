import { 
    HeaderSection, 
    Logo, 
    MenuIcon, 
    Nav, 
    NavLink 
} from "./Header.style";

const Header = () => {
    return ( 
        <HeaderSection>
            <Logo to="/home">foodnet</Logo>
            <Nav>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/">Our Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
            </Nav>
            <MenuIcon>
                <i className="fas fa-bars"></i>
            </MenuIcon>
        </HeaderSection>
     );
}
 
export default Header;