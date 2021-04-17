import heroPic from "../../assets/images/hero-mobile.png";
import { 
    Button,
    GreenDiv, 
    HeroContent, 
    HeroSection, 
    ImageWrapper 
} from "./Hero.style";

const Hero = () => {
    return ( 
        <HeroSection>
            <ImageWrapper>
                <img src={heroPic} alt="plate of vegetables" width="300" height="300" />
            </ImageWrapper>

            <GreenDiv />

            <HeroContent>
                <h1>start your day the right way</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eos repellendus, corrupti excepturi eum tempora! Praesentium perspiciatis atque al
                </p>
                <Button primary>view our menu</Button>
            </HeroContent>
        </HeroSection>
    );
}
 
export default Hero;