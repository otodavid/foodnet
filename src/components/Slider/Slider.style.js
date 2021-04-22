import styled from "styled-components";
import { bp } from "../../styles/breakpoints";
import { Button } from '../Hero/Hero.style';

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.background};
  position: relative;
  overflow: hidden;
  padding-bottom: 5rem;

  @media ${bp.laptop} {
    display: flex;
  }
`;

export const Slide = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
  z-index: 0;
  transform: translate(-50%, -40%); 
  
  & > div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 20px solid ${({theme}) => theme.primary};
    transform: rotateZ(0deg);
    transition: all .5s;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media ${bp.laptop} {
    flex: 0 1 800px;
    height: 800px;
    
    & > div {
      border: 70px solid ${({theme}) => theme.primary};
    }
  }
`;

export const SlideItem = styled.div` 
  position: relative;
  z-index: 2;
  transition: all .5s;
  transform-origin: center;
  will-change: transform;

  &.slide0 {
    left: 40%;
    top: 20%;
    grid-column: 2/3;
    grid-row: 2/3;
    transform: rotateZ(0deg);

    @media ${bp.laptop} {
      left: 20%;
      top: -15%;
    }
  }
  
  &.slide1 {
    left: 20%;
    bottom: 40%;
    grid-column: 2/3;
    grid-row: 1/2;
    transform: rotateZ(270deg);

    @media ${bp.laptop} {
      left: -10%;
      bottom: 50%;
    }
  }
  
  &.slide2 {
    right: 40%;
    bottom: 20%;
    grid-column: 1/2;
    grid-row: 1/2;
    transform: rotateZ(180deg);

    @media ${bp.laptop} {
      right: 50%;
      bottom: 25%;
    }
  }
  
  &.slide3 {
    right: 30%; 
    top: 40%;
    grid-column: 1/2;
    grid-row: 2/3;
    transform: rotate(90deg);

    @media ${bp.laptop} {
      right: 30%;
      top: 20%;
    }
  }
`;

export const Image = styled.div`
  width: 200px;

  img {
    width: 100%;
  }

  @media ${bp.laptop} {
    width: 400px;
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

  @media ${bp.laptop} {
    top: 600px;
    left: 40%;
  }
`;

export const SlideContent = styled.div`
  margin: -5rem 0 0;
  display: flex;
  flex-flow: column nowrap;
  
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

  @media ${bp.laptop} {
    margin-top: 8rem;
    flex: 0 450px;
    height: 0%;
  }
`;

export const RealContent = styled.div`
  padding: 3rem 1.5rem;

  p {
    margin-bottom: 1rem;
  }

  & ${Button} {
    margin-top: 1rem;
    width: 100%;
  }

  @media ${bp.laptop} {

  }
`;

export const Title = styled.h3`

`;