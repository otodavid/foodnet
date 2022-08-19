import { useEffect, useRef, useState } from 'react';
import * as Styled from './style';
import { FaHamburger, FaMoon, FaSun } from 'react-icons/fa';
import { scrollToTop } from '../../utils/helpers';

export function Header({ toggleTheme, theme, toggleMenu }) {
  const headerRef = useRef();
  const [hasScrolled, setHasScrolled] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderColor);
    return () => {
      window.removeEventListener('scroll', changeHeaderColor);
    };
  }, [hasScrolled]);

  return (
    <Styled.HeaderSection ref={headerRef} hasScrolled={hasScrolled}>
      <Styled.Logo to='/' onClick={scrollToTop}>
        foodnet
      </Styled.Logo>

      <Styled.Nav className='main-nav'>
        <li>
          <Styled.NavLink
            to='hero'
            duration={500}
            smooth
            activeClass='active'
            spy={true}
            offset={-90}
          >
            Home
          </Styled.NavLink>
        </li>
        <li>
          <Styled.NavLink
            to='how-it-works'
            smooth
            offset={-90}
            duration={500}
            activeClass='active'
            spy={true}
          >
            How it works
          </Styled.NavLink>
        </li>
        <li>
          <Styled.NavLink
            to='menu'
            smooth
            offset={-90}
            duration={500}
            activeClass='active'
            spy={true}
          >
            Our Menu
          </Styled.NavLink>
        </li>
        <li>
          <Styled.NavLink
            to='gallery'
            smooth
            offset={-90}
            duration={500}
            activeClass='active'
            spy={true}
          >
            Gallery
          </Styled.NavLink>
        </li>
      </Styled.Nav>

      <Styled.ControlBtns>
        <Styled.ThemeChanger onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </Styled.ThemeChanger>

        <Styled.MenuIcon onClick={toggleMenu}>
          <FaHamburger />
        </Styled.MenuIcon>
      </Styled.ControlBtns>
    </Styled.HeaderSection>
  );
}
