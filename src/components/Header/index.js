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
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const handleMenu = (e) => {
        // handle menu when hamburger button is clicked
        e.target.classList.contains("fas") && (
            isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
        );

        // close menu when dark overlay is clicked
        e.target.classList.contains("active") && setIsMenuOpen(false);

        // close menu when any link is clicked
        e.target.closest('li') && setIsMenuOpen(false);

        console.log(e.target.className + "clicked me");
    }
    
    return ( 
        <HeaderSection>
            <Logo to="/">foodnet</Logo>
            
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