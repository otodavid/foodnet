import { Link } from 'react-router-dom';
import { Button } from '../Button';
import styled from 'styled-components';
import { bp } from '../../styles/breakpoints';

export function Hero({ id }) {
  return (
    <HeroSection id={id}>
      <ImageWrapper>
        <img src='assets/images/hero.png' alt='plate of chicken breat' />
      </ImageWrapper>

      <GreenDiv />

      <HeroContent>
        <h1>start your day the right way</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eos
          repellendus, corrupti excepturi eum tempora! Praesentium perspiciatis
          atque al
        </p>

        <HeroButton primary>
          <Link to='/comingsoon'>Get started</Link>
        </HeroButton>
      </HeroContent>
    </HeroSection>
  );
}

/**
 * STYLED COMPONENTS
 */
const HeroSection = styled.div`
  position: relative;
  background-image: url('assets/images/gallery11.jpg');
  background-position: center center;
  background-size: cover;
  background-repaet: no-repeat;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.2s ease-in;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media ${bp.laptop} {
    background-image: none;
    color: ${({ theme }) => theme.text.main};
    display: flex;

    &::before {
      display: none;
    }
  }
`;

const HeroButton = styled(Button)`
  width: min(90%, 12rem);
  margin: 2rem auto 0;

  & a {
    color: #fff;
    width: 100;
  }

  @media ${bp.laptop} {
    margin: 2rem 0;
  }
`;

const ImageWrapper = styled.div`
  display: none;

  @media ${bp.laptop} {
    display: block;
    flex: 1 1 50%;
    position: relative;
    z-index: 2;
    padding-top: 9rem;
    order: 3;

    img {
      display: block;
      width: 80%;
      height: 80%;
      object-fit: contain;
      margin-right: 10%;
      margin-left: auto;
    }
  }

  @media ${bp.desktop} {
    img {
      width: 85%;
      height: 85%;
    }
  }
`;

const GreenDiv = styled.div`
  display: none;

  @media ${bp.laptop} {
    display: block;
    position: absolute;
    top: -100px;
    right: -50px;
    width: 45%;
    height: 200%;
    z-index: 0;
    transform: rotateZ(35deg);
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.primary.main},
      #0a0a0a
    );
  }

  @media ${bp.desktop} {
    right: -200px;
    width: 50%;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  padding: 11rem 0 8rem;
  position: relative;
  z-index: 3;

  & h1,
  & p {
    max-width: 500px;
    margin: 0 auto;

    @media ${bp.desktop} {
      padding-left: 0;
    }
  }

  h1 {
    text-transform: capitalize;
    color: ${({ theme }) => theme.text.aux};

    @media ${bp.laptop} {
      color: ${({ theme }) => theme.secondary};
      margin: 0;
    }
  }

  p {
    margin: 1rem auto;
    color: ${({ theme }) => theme.text.aux};

    @media ${bp.laptop} {
      margin: 1rem 0;
      width: 91%;
      color: ${({ theme }) => theme.text.main};
    }
  }

  @media ${bp.laptop} {
    flex: 1 1 50%;
    padding: 15rem 1rem 7rem 6rem;
    text-align: left;
  }

  @media ${bp.desktop} {
    padding-left: 9rem;
  }
`;
