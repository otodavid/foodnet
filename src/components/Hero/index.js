import styled from "styled-components";
import heroPic from "../../assets/images/hero.png";
import { bp } from "../../styles/breakpoints";
import { 
    Button,
    GreenDiv, 
    HeroContent, 
    HeroSection, 
    ImageWrapper 
} from "./Hero.style";


const Overlay = styled.div`
    background-color: rgb(0,0,0,0.65);

    @media ${bp.laptop} {
        background-color: transparent;
        display: flex;
    }
`;

const Hero = () => {
    const myMediaQuery =  window.matchMedia('(min-width: 900px)')

    return ( 
        <HeroSection>
            <Overlay>
                { myMediaQuery.matches && (
                    <>
                        <ImageWrapper>
                            <img src={heroPic} alt="plate of chicken breat" />
                        </ImageWrapper>
                        <GreenDiv />
                    </>
                ) }

                <HeroContent>
                    <h1>start your day the right way</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eos repellendus, corrupti excepturi eum tempora! Praesentium perspiciatis atque al
                    </p>
                    <Button primary>view our menu</Button>
                </HeroContent>
            </Overlay>

        </HeroSection>
    );
}
 
export default Hero;