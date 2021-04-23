import styled from "styled-components";
import { bp } from "../../styles/breakpoints";
import { Button } from '../Hero/Hero.style';

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.background};
  position: relative;
  overflow: hidden;
  padding-bottom: 5rem;

  @media ${bp.tablet} {
    display: flex;
  }

  @media ${bp.laptop} {
    padding-bottom: 17rem;
  }

  @media ${bp.desktop} {
    padding-bottom: 20rem;
  }
`;

export const Slide = styled.div`
  width: 400px;
  height: 400px; 
  position: relative;
  z-index: 0;
  transform: translate(-50%, -40%); 
  
  .rotate {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 20px solid ${({theme}) => theme.primary};
    transform: rotateZ(0deg);
    transition: all .5s;
    position: relative;
  }

  @media ${bp.phablet} {
    width: 700px;
    height: 700px; 

    .rotate {
      border: 40px solid ${({theme}) => theme.primary};
    }
  }

  @media ${bp.tablet} {
    position: absolute;
    width: 500px;
    height: 500px; 
    
  }
  @media ${bp.laptop} {
    width: 800px;
    height: 800px;
    
    .rotate {
      border: 70px solid ${({theme}) => theme.primary};
    }
  }

  @media ${bp.desktop} {
    width: 1000px;
    height: 1000px;
  }
`;

export const SlideItem = styled.div` 
  position: absolute;
  z-index: 2;
  transition: all .5s;
  transform-origin: center;
  will-change: transform;
  width: 200px;

  img {
    width: 100%;
  }

  @media ${bp.phablet} {
    width: 300px;
  }

  @media ${bp.tablet} {
    width: 250px;
  }

  @media ${bp.laptop} {
    width: 400px;
  }

  &.slide1 {
    top: 55%;
    left: 70%;
    transform: rotateZ(0deg);

    @media ${bp.phablet} {
      top: 55%;
      left: 75%;
    }

    @media ${bp.tablet} {
      left: 70%;
    }

    @media ${bp.laptop} {
      top: 53%;
      left: 70%;
    }

    @media ${bp.desktop} {
      top: 55%;
      left: 80%;
    }
  }
  
  &.slide2 {
    top: -30%; 
    left: 55%;
    transform: rotate(270deg);

    @media ${bp.phablet} {
      top: -25%;
      left: 55%;
    }

    @media ${bp.tablet} {
      top: -30%;
    }

    @media ${bp.desktop} {
      top: -25%;
    }
  }
  
  &.slide3 {
    top: -10%;
    left: -25%;
    transform: rotateZ(180deg);

    @media ${bp.phablet} {
      top: 0%;
      left: -20%;
    }

    @media ${bp.tablet} {
      top: -15%;
      left: -30%;
    }

    @media ${bp.desktop} {
      top: 0%;
      left: -25%;
    }
  }
  
  &.slide4 {
    top: 75%;
    left: -10%;
    transform: rotateZ(90deg);

    @media ${bp.phablet} {
      top: 80%;
      left: 0%;
    }

    @media ${bp.tablet} {
      top: 75%;
      left: -10%;
    }

    @media ${bp.desktop} {
      top: 80%;
      left: 0%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: calc(500px / 2 + 90px);
  left: 70%;
  transform: translateX(-50%);
  width: 100px;
  display: flex;
  justify-content: space-between;

  & ${Button} {
    border: 0;
    border-radius: 0px;
    transition: all .3s;

    &:hover {
      background-color: ${({theme}) => theme.primary};
      color: ${({theme}) => theme.light};
    }
  }

  @media ${bp.phablet} {
    top: 520px;
    left: 75%;
  }

  @media ${bp.tablet} {
    top: 380px;
    left: 250px;
  }

  @media ${bp.laptop} {
    top: 600px;
    left: 40%;
  }
`;

export const SlideContent = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-flow: column nowrap;
  padding: 0 .5rem;
  
  & > div {
    background-color: ${({theme}) => theme.light};
    border-radius: 10px;
    box-shadow: 2px 5px 10px rgba(0,0,0,0.15);
    width: 85%;
    height: auto;
    margin: 0 auto;
    flex: 1 0 100%;
    opacity: 0;
    transform: translateY(100vh);
    transition: opacity .5s;

    &.active {
      opacity: 1;
      transform: translateY(0vh);      
    }
  }

  @media ${bp.phablet} {
    margin-top: -3rem;

    & > div {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media ${bp.tablet} {
    margin: 5rem 0 0 auto;
    flex: 0 1 55%;

    & > div {
      width: 80%;
      max-width: 500px;
    }
  }

  @media ${bp.laptop} {
    margin-top: 9rem;
    margin-right: 2%;
    flex: 0 50%;
    height: 0%;
  }

  @media ${bp.desktop} {
    margin-top: 11rem;
    margin-right: 7%;
    flex: 0 1 45%;
  }
`;

export const RealContent = styled.div`
  padding: 2.5rem 2rem 2rem;

  p {
    margin: 1rem 0;
  }
`;

export const Price = styled.p`
  font-size: 22px;
  color: ${({theme}) => theme.primary};
  font-weight: 600;
  text-align: right;
  padding-top: 1rem;
`;