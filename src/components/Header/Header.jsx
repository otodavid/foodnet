import { useRef } from 'react';
import * as Styled from './style';
import { Link } from 'react-router-dom';
import { FaHamburger, FaMoon, FaSun } from 'react-icons/fa';

export function Header({ toggleTheme, theme, toggleMenu }) {
  const menuButtonRef = useRef();

  return (
    <Styled.HeaderSection>
      <Styled.Logo to='/'>foodnet</Styled.Logo>

      <Styled.Nav>
        <li>
          <Styled.NavLink to='hero' duration={500} smooth>
            Home
          </Styled.NavLink>
        </li>
        <li>
          <Styled.NavLink to='services' smooth offset={-70} duration={500}>
            Services
          </Styled.NavLink>
        </li>
        <li>
          <Styled.NavLink to='menu' smooth offset={-70} duration={500}>
            Our Menu
          </Styled.NavLink>
        </li>
        <li>
          <Styled.NavLink to='contact' smooth offset={-70} duration={500}>
            Contact
          </Styled.NavLink>
        </li>
      </Styled.Nav>

      <Styled.ControlBtns>
        <Styled.ThemeChanger onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </Styled.ThemeChanger>

        <Styled.MenuIcon onClick={toggleMenu} ref={menuButtonRef}>
          <FaHamburger />
        </Styled.MenuIcon>
      </Styled.ControlBtns>
    </Styled.HeaderSection>
  );
}
