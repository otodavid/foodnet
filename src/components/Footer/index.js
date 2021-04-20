import { Logo } from "../Header/Header.style"
import { Button } from "../Hero/Hero.style"
import { 
    Copyright,
    FooterBottom,
    FooterLink,
    FooterMenu,
    FooterSection, 
    Newsletter,
    NewsletterIntro,
    SocialIcons,
    SubscribeForm
} from "./Footer.style";

const Footer = () => {
    return ( 
        <FooterSection>
            <Newsletter>
                <NewsletterIntro>
                    <h3>Get Notified</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum nihil sunt quasi veritatis nemo necessitatibus perferendis animi dicta, ratio
                    </p>
                </NewsletterIntro>
                
                <SubscribeForm>
                    <input type="text" placeholder="Email Address" />
                    <Button primary>Subscribe</Button>
                </SubscribeForm>
            </Newsletter>

            <FooterBottom>
                <Logo to="/">foodnet</Logo>
                <FooterMenu>
                    <li>
                        <FooterLink>Home</FooterLink>
                    </li>
                    <li>
                        <FooterLink>Services</FooterLink>
                    </li>
                    <li>
                        <FooterLink>Our Menu</FooterLink>
                    </li>
                    <li>
                        <FooterLink>Contact</FooterLink>
                    </li>
                </FooterMenu>
                <SocialIcons>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                </SocialIcons>
            </FooterBottom>
            <Copyright>
                    <p>
                        Made with &nbsp;
                        <span><i className="fas fa-heart"></i></span> &nbsp;
                        by Oloruntomi David
                    </p>
                </Copyright>
        </FooterSection>
     );
}
 
export default Footer;