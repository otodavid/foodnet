import styled, { keyframes } from 'styled-components';
import { bp } from '../../styles/breakpoints';
import { Button } from '../Button';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
  height: 800px;
  transition: background-color 0.2s ease-in;

  @media ${bp.tablet} {
    display: flex;
    height: 600px;
  }

  @media ${bp.laptop} {
    height: 650px;
    padding-bottom: 5rem;
  }

  @media ${bp.desktop} {
    height: 800px;
  }
`;

export const SlideGreenDiv = styled.div`
  position: absolute;
  top: -200px;
  left: -350px;
  width: 70%;
  height: 200%;
  z-index: 0;
  transform: rotateZ(30deg);
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.primary.main},
    #0a0a0a
  );

  @media ${bp.phablet} {
    top: -250px;
  }

  @media ${bp.tablet} {
    width: 500px;
  }
`;

export const SlideImage = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  z-index: 0;
  transform: translate(-50%, -50%);

  @media ${bp.phablet} {
    width: 800px;
    height: 800px;
  }

  @media ${bp.tablet} {
    position: absolute;
    width: 700px;
    height: 700px;
  }
  @media ${bp.laptop} {
    width: 900px;
    height: 900px;
  }

  @media ${bp.desktop} {
    width: 1100px;
    height: 1100px;
  }
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'slide3 slide2'
    'slide4 slide1';
  gap: 7rem;

  @media ${bp.desktop} {
    gap: 15rem;
  }
`;

const spin = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
`;

export const ImageItem = styled.div`
  z-index: 2;
  transition: all 0.5s;
  display: flex;

  img {
    display: block;
    width: 100%;
    object-fit: contain;
    cursor: pointer;
    animation: ${spin} 5s linear infinite;
    animation-play-state: paused;

    &:hover {
      animation-play-state: running;
    }
  }

  &.item1 {
    grid-area: slide1;
    align-items: flex-start;
    justify-content: flex-start;

    img {
      transform: rotateZ(180deg);
    }
  }

  &.item2 {
    grid-area: slide2;
    align-items: flex-start;
    justify-content: flex-end;

    img {
      transform: rotate(270deg);
    }
  }

  &.item3 {
    grid-area: slide3;
    align-items: flex-end;
    justify-content: flex-start;

    img {
      transform: rotateZ(90deg);
    }
  }

  &.item4 {
    grid-area: slide4;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export const SlideContent = styled.div`
  margin: -6rem 0;
  display: flex;
  flex-flow: column nowrap;
  padding: 0 0.5rem;

  @media ${bp.phablet} {
    margin: -22rem 0;
  }

  @media ${bp.tablet} {
    margin: 5rem 0 0 auto;
    flex: 0 1 52%;
    height: 0%;
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

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.neutral.light};
  border-radius: 10px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.15);
  width: 85%;
  height: auto;
  margin: 0 auto;
  flex: 1 0 100%;
  opacity: 0;
  transform: translateY(100vh);
  transition: transform, opacity 0.5s ease-in-out, background-color 0.2s ease-in;

  &.active {
    opacity: 1;
    transform: translateY(0vh);
  }

  &:hover {
    box-shadow: 5px 8px 15px 3px rgba(0, 0, 0, 0.15);
  }

  @media ${bp.phablet} {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${bp.tablet} {
    width: 80%;
    max-width: 500px;
  }
`;

export const Content = styled.div`
  padding: 2.5rem 2rem 2rem;

  p {
    margin: 1rem 0;
  }
`;

export const Price = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.primary.main};
  font-weight: 600;
  text-align: right;
  padding-top: 1rem;
`;

export const PaginationWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 70%;

  @media ${bp.tablet} {
    top: 480px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${bp.laptop} {
    top: 530px;
  }

  @media ${bp.desktop} {
    top: 650px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${bp.tablet} {
    & button {
      position: absolute;
      border: 0;
      padding: 0.8rem;
      display: inline;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.5rem;

      &:first-of-type {
        left: -55px;
      }

      &:last-of-type {
        right: -55px;
      }
    }
  }

  @media ${bp.laptop} {
    & button {
      padding: 0.8rem;
      top: 50%;
      font-size: 1.5rem;

      &:first-of-type {
        left: -90px;
      }

      &:last-of-type {
        right: -90px;
      }
    }
  }
`;

export const ThumbnailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  height: 210px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media ${bp.tablet} {
    top: 520px;
    left: 20%;
    width: 220px;
    flex-flow: row wrap;
    height: auto;
    margin-bottom: 0;
  }
`;
export const Thumbnail = styled.div`
  & img {
    position: relative;

    &.active {
      filter: brightness(0.4);
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SliderNavButton = styled(Button)`
  border: 0;
  padding: 0.5rem 0.7rem;
  display: inline;
  font-size: 1.2rem;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.text.aux};
  }

  &.disabled {
    color: grey;
    cursor: default;

    &:hover {
      background-color: transparent;
      color: grey;
    }
  }
`;
