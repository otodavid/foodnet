import { Link } from "react-router-dom";
import heroPic from "../../assets/images/hero.png";
import { Button } from "../Button/style";
import * as S from "./style";

const Hero = ({ id }) => {
    return ( 
        <S.HeroSection id={id}>
                <S.ImageWrapper>
                    <img src={heroPic} alt="plate of chicken breat" />
                </S.ImageWrapper>
    
                <S.GreenDiv />

                <S.HeroContent>
                    <h1>start your day the right way</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eos repellendus, corrupti excepturi eum tempora! Praesentium perspiciatis atque al
                    </p>
                    <Button as={Link} to="/comingsoon" primary>view our menu</Button>
                </S.HeroContent>

        </S.HeroSection>
    );
}
 
export default Hero;