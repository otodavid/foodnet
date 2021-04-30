import styled from "styled-components";
import heroPic from "../../assets/images/hero.png";
import { bp } from "../../styles/breakpoints";
import * as S from "./Hero.style";


const Overlay = styled.div`
    background-color: rgb(0,0,0,0.65);

    @media ${bp.laptop} {
        background-color: transparent;
        display: flex;
    }
`;

const Hero = () => {
    const myMediaQuery =  window.matchMedia('(min-width: 1000px)');

    return ( 
        <S.HeroSection>
            <Overlay>
                { myMediaQuery.matches && (
                    <>
                        <S.ImageWrapper>
                            <img src={heroPic} alt="plate of chicken breat" />
                        </S.ImageWrapper>
                        <S.GreenDiv />
                    </>
                ) }

                <S.HeroContent>
                    <h1>start your day the right way</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eos repellendus, corrupti excepturi eum tempora! Praesentium perspiciatis atque al
                    </p>
                    <S.Button primary>view our menu</S.Button>
                </S.HeroContent>
            </Overlay>

        </S.HeroSection>
    );
}
 
export default Hero;