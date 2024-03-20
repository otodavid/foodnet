import { useContext, useEffect, useRef, useState } from 'react';
import * as Styled from './HeaderElements';
import { FaHamburger, FaMoon, FaSun } from 'react-icons/fa';
import { scrollToTop } from '../../utils/helpers';
import { ThemeModeContext } from '../../context/ThemeModeContext';

export function Header({ toggleTheme, openNav }) {
  const headerRef = useRef();
  const [hasScrolled, setHasScrolled] = useState(false);
  const themeMode = useContext(ThemeModeContext);
  const menuBtnRef = useRef(null);

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
          <Styled.MenuLink to={'hero'} displayName={'Home'} />
        </li>
        <li>
          <Styled.MenuLink to='how-it-works' displayName={'How it works'} />
        </li>
        <li>
          <Styled.MenuLink to='menu' displayName={'Our Menu'} />
        </li>
        <li>
          <Styled.MenuLink to='gallery' displayName={'Gallery'} />
        </li>
      </Styled.Nav>

      <Styled.ControlBtns>
        <Styled.ThemeChanger themeMode={themeMode} onClick={toggleTheme}>
          {themeMode === 'light' ? <FaMoon /> : <FaSun />}
        </Styled.ThemeChanger>

        <Styled.MenuIcon
          ref={menuBtnRef}
          onClick={() => openNav(menuBtnRef.current)}
        >
          <FaHamburger />
        </Styled.MenuIcon>
      </Styled.ControlBtns>
    </Styled.HeaderSection>
  );
}
