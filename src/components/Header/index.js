import { useState } from "react";
import * as S from "./Header.style";

const Header = ({ toggleTheme, theme }) => {
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
        <S.HeaderSection>
            <S.Logo to="/">foodnet</S.Logo>
            
            <S.Overlay
                className={isMenuOpen ? "active" : ''}
                onClick={handleMenu}
            >
                <S.Nav>
                    <li>
                        <S.NavLink to="/">Home</S.NavLink>
                    </li>
                    <li>
                        <S.NavLink to="/">Services</S.NavLink>
                    </li>
                    <li>
                        <S.NavLink to="/">Our Menu</S.NavLink>
                    </li>
                    <li>
                        <S.NavLink to="/">Contact</S.NavLink>
                    </li>
                </S.Nav>
            </S.Overlay>
            
            <S.ControlBtns>
                <S.MenuIcon onClick={handleMenu}>
                    <i 
                        className={ isMenuOpen ? "fas fa-times" : "fas fa-bars"}
                    ></i>
                </S.MenuIcon>

                <S.ThemeChanger onClick={toggleTheme}>
                    { theme === "light" ?  <i className="fas fa-sun"></i> : 
                    <i className="fas fa-moon"></i> }
                   
                </S.ThemeChanger>
            </S.ControlBtns>
        </S.HeaderSection>
     );
}
 
export default Header;