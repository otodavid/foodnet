import { Logo } from "../Header/Header.style"
import { Button } from "../Hero/Hero.style"
import * as S from "./Footer.style";

const Footer = () => {
    return ( 
        <S.FooterSection>
            <S.Newsletter>
                <S.NewsletterIntro>
                    <h3>Get Notified</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum nihil sunt quasi veritatis nemo necessitatibus perferendis animi dicta, ratio
                    </p>
                </S.NewsletterIntro>
                
                <S.SubscribeForm>
                    <S.TextField placeholder="Email Address" />
                    <Button primary>Subscribe</Button>
                </S.SubscribeForm>
            </S.Newsletter>

            <S.FooterBottom>
                <Logo to="/">foodnet</Logo>
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
            </S.FooterBottom>
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