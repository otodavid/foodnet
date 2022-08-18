import { useEffect, useRef, useState } from 'react';
import { slidesData } from '../../data';
import * as Styled from './style';

export function Slider({ id }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testRef = useRef(0);

  const prevSlide = () => {
    if (currentSlide === 0) return;

    setCurrentSlide((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (currentSlide === slidesData.length - 1) return;
    
    setCurrentSlide((prev) => prev + 1);
  };

  const thumbnailNavigation = (event, index) => {
    const rotate = document.querySelector('.rotate');
    rotate.style.transform = `rotateZ(${index * 90}deg)`;

    setCurrentSlide(index);
  };

  useEffect(() => {
    const rotate = document.querySelector('.rotate');
    rotate.style.transform = `rotateZ(${currentSlide * 90}deg)`;
  }, [currentSlide]);

  return (
    <Styled.Wrapper id={id}>
      <Styled.SlideGreenDiv />

      <Styled.SlideImage>
        <Styled.ImagesWrapper className='rotate' ref={testRef}>
          {slidesData.map((item, index) => (
            <Styled.ImageItem key={item.id} className={`item` + item.id}>
              <img src={item.image} alt='' />
            </Styled.ImageItem>
          ))}
        </Styled.ImagesWrapper>
      </Styled.SlideImage>

      <Styled.SlideContent>
        {slidesData.map((item, index) => (
          <Styled.ContentWrapper
            key={item.id}
            className={index === currentSlide ? 'active' : ''}
          >
            {index === currentSlide && (
              <Styled.Content>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <Styled.Price>&#36; {item.price}</Styled.Price>
              </Styled.Content>
            )}
          </Styled.ContentWrapper>
        ))}
      </Styled.SlideContent>

      <Styled.PaginationWrapper>
        <Styled.Pagination>
          <Styled.ThumbnailsWrapper>
            {slidesData.map((item, index) => (
              <Styled.Thumbnail
                key={item.id}
                onClick={(e) => thumbnailNavigation(e, index)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width='40'
                  className={currentSlide === index ? 'active' : ''}
                />
              </Styled.Thumbnail>
            ))}
          </Styled.ThumbnailsWrapper>

          <Styled.SliderNavButton
            className={currentSlide === 0 ? 'disabled prev-btn' : 'prev-btn'}
            onClick={prevSlide}
          >
            <i className='fas fa-chevron-left'></i>
          </Styled.SliderNavButton>
          <Styled.SliderNavButton
            className={
              currentSlide === slidesData.length - 1 ? 'disabled next-btn' : 'next-btn'
            }
            onClick={nextSlide}
          >
            <i className='fas fa-chevron-right'></i>
          </Styled.SliderNavButton>
        </Styled.Pagination>
      </Styled.PaginationWrapper>
    </Styled.Wrapper>
  );
}
