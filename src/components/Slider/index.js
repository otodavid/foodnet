// Import Swiper React components
import { useState } from 'react';
import {data} from './data';
import * as S from './Slider.style';
import { Button } from '../Hero/Hero.style';


const Slider =  () => {
  const [ current, setCurrent ] = useState(0);
  const [ contentCurrent, setContentCurrent ] = useState(0);

  const prevSlide = () => {
    if(current >= 90) {
      const rotate = document.querySelector(".rotate");
      rotate.style.transform = `rotateZ(${current - 90}deg)`;
      
      setCurrent(current - 90);

      setContentCurrent(contentCurrent - 1);
    }
  }
  
  const nextSlide = () => {
    if(current < 270) {
      const rotate = document.querySelector(".rotate");
      rotate.style.transform = `rotateZ(${current + 90}deg)`;
      
      setCurrent(current + 90);

      setContentCurrent(contentCurrent + 1);
    }
  }

  const test = (e, id) => {
    if(current <= 270) {
      const rotate = document.querySelector(".rotate");
      const reset = id - 1;
      rotate.style.transform = `rotateZ(${reset * 90}deg)`;
      
      setCurrent(reset * 90);

      const resetContent = id - 1;

      setContentCurrent(resetContent);
    }
  }
  

  return (
      <S.Wrapper>
        <S.SlideGreenDiv />
        
        <S.SlideImage>
          <S.ImagesWrapper className="rotate">
            {data.map((item, index) => (
              <S.ImageItem key={item.id}
                className={`slide` + item.id}
              >
                <img src={item.image} alt="" />
              </S.ImageItem>
            ))}
          </S.ImagesWrapper>
        </S.SlideImage>

        <S.SlideContent>
            { data.map((item, index) => (
                <S.ContentWrapper 
                  key={item.id}
                  className={index === contentCurrent ? "active" : ""}
                >
                  { index === contentCurrent && (
                    <S.Content className="testing">
                      <h3>{ item.name }</h3>
                      <p>{ item.desc }</p>
                      <S.Price>
                        &#36; { item.price }
                      </S.Price>
                    </S.Content>
                  )}
                </S.ContentWrapper>
            ))}
        </S.SlideContent>

        <S.PaginationWrapper>
          <S.Pagination>
            <S.Thumbnails>
            {data.map(item => (
              <S.Nails key={item.id} onClick={(e) => test(e, item.id)}>
                <img src={item.image} alt="" width="40" />
              </S.Nails>
            ))}
            </S.Thumbnails>

            <Button onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </Button>
            <Button onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </Button>
          </S.Pagination>
        </S.PaginationWrapper>
      </S.Wrapper>
  );
};

export default Slider;