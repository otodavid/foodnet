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

    const handleMenu = (e) => {
        // handle menu when hamburger button is clicked
        isMenuOpen ? setisMenuOpen(false) : setisMenuOpen(true);

        // close menu when dark overlay is clicked
        e.target.classList.contains("active") && setisMenuOpen(false);

        // close menu when any link is clicked
        e.target.closest('li') && setisMenuOpen(false);
    }
    
    return ( 
        <HeaderSection>
            <Logo to="/home">foodnet</Logo>
            
            <Overlay
                className={isMenuOpen ? "active" : ''}
                onClick={handleMenu}
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
            <MenuIcon onClick={handleMenu}>
                <i 
                    className={ isMenuOpen ? "fas fa-times" : "fas fa-bars"}
                ></i>
            </MenuIcon>
        </HeaderSection>
     );
}
 
export default Header;