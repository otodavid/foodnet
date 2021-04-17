import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.background};
  position: relative;
  overflow: hidden;
  padding-bottom: 5rem;
`;

export const Slide = styled.div`
  transform: translate(-50%, -50%); 
  width: 496px;
  height: 496px;
  position: relative;
  z-index: 0;
  
  & > div {
    /* background-color: #; */
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
  }
  
  &.slide1 {
    left: 20%;
    bottom: 40%;
    grid-column: 2/3;
    grid-row: 1/2;
    transform: rotateZ(270deg);
  }
  
  &.slide2 {
    right: 40%;
    bottom: 20%;
    grid-column: 1/2;
    grid-row: 1/2;
    transform: rotateZ(180deg);
  }
  
  &.slide3 {
    right: 30%; 
    top: 40%;
    grid-column: 1/2;
    grid-row: 2/3;
    transform: rotate(90deg);
  }
`;

export const Image = styled.div`
  width: 220px;

  img {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: calc(496px / 2 + 50px);
  left: 70%;
  transform: translateX(-50%);
  width: 140px;
  display: flex;
  justify-content: space-between;

`;

export const Button = styled.button`
  background-color: #fff;
  padding: 10px;
`;

export const SlideContent = styled.div`
  margin: -7rem 0 0;
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
`;

export const RealContent = styled.div`
  padding: 2rem 1.5rem;
`;