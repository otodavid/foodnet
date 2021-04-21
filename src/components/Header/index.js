import { useState } from "react";
import { 
    HeaderSection, 
    Logo, 
    MenuIcon, 
    Nav, 
    NavLink, 
    Overlay
} from "./Header.style";

const Header = () => {
    const [ isMenuOpen, setisMenuOpen ] = useState(false);

    const handleOpenMenu = () => {
        isMenuOpen ? setisMenuOpen(false) : setisMenuOpen(true);
    }

    const handleCloseOverlay = (e) => {
        if(e.target.classList.contains('active')) {
            handleOpenMenu();
        }
    }
    
    return ( 
        <HeaderSection>
            <Logo to="/home">foodnet</Logo>
            
            <Overlay
                className={isMenuOpen ? "active" : ''}
                onClick={handleCloseOverlay}
            >
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

            </Overlay>
            <MenuIcon onClick={handleOpenMenu}>
                <i 
                    className={ isMenuOpen ? "fas fa-times" : "fas fa-bars"}
                ></i>
            </MenuIcon>
        </HeaderSection>
     );
}
 
export default Header;