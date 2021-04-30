import { Logo } from "../Header/style"
import * as S from "./style";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return ( 
        <S.FooterSection>
            <Logo 
                to="/"
                onClick={scrollToTop}
            >
                foodnet
            </Logo>

            <S.FooterMenu>
                <li>
                    <S.FooterLink to="/">Home</S.FooterLink>
                </li>
                <li>
                    <S.FooterLink to="/">Services</S.FooterLink>
                </li>
                <li>
                    <S.FooterLink to="/">Our Menu</S.FooterLink>
                </li>
                <li>
                    <S.FooterLink to="/">Contact</S.FooterLink>
                </li>
            </S.FooterMenu>

            <S.SocialIcons>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
            </S.SocialIcons>
            
            <S.Copyright>
                <p>
                    Made with &nbsp;
                    <span><i className="fas fa-heart"></i></span> &nbsp;
                    by Oloruntomi David
                </p>
            </S.Copyright>
        </S.FooterSection>
     );
}
 
export default Footer;