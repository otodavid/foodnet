// Import Swiper React components
import { useState } from 'react';
import {data} from './data';
import {
  ButtonWrapper,
  Image,
  RealContent,
  Slide,
  SlideContent,
  SlideItem,
  Wrapper,
} from './Slider.style';
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

  return (
      <Wrapper>
        <Slide>
          <div className="rotate">
            {data.map((item, index) => (
              <SlideItem key={item.id}
                className={`slide` + index}
              >
                  <Image>
                    <img src={item.image} alt="" />
                  </Image>
              </SlideItem>
            ))}
          </div>
        </Slide>

        <SlideContent>
            { data.map((item, index) => (
                <div 
                  key={item.id}
                  className={index === contentCurrent ? "active" : ""}
                >
                  { index === contentCurrent && (
                    <RealContent>
                      <h3>{ item.name }</h3>
                      <p>{ item.desc }</p>
                      <p>
                        <strong>Price: </strong>&nbsp; &#36;{ item.price }
                      </p>
                      <Button primary>Order Now</Button>
                    </RealContent>
                  )}
                </div>
            ))}
        </SlideContent>

        <ButtonWrapper>
          <Button onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </Button>
          <Button onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </Button>
        </ButtonWrapper>
      </Wrapper>
  );
};

export default Slider;