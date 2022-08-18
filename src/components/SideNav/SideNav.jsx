import React, { useEffect, useRef } from 'react';
import { Button } from '../Button';
import {
  Container,
  Backdrop,
  CloseIcon,
  Menu,
  MenuItem,
  MenuLink,
  GetNotifiedButton,
} from './SideNavElements';
import { FaTimes } from 'react-icons/fa';

export function SideNav({ isMenuOpen, toggleMenu, setIsMenuOpen }) {
  const backdropRef = useRef();
  
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('backdrop')) return toggleMenu();
  };
  
  // prevent body from scrolling when menu is open
  useEffect(() => {
    const bodyEl = document.querySelector('body');
    if (isMenuOpen) {
      bodyEl.style.height = '100vh';
      bodyEl.style.overflow = 'hidden';
    } else {
      bodyEl.style.height = 'auto';
      bodyEl.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <Backdrop
      isMenuOpen={isMenuOpen}
      onClick={handleBackdropClick}
      className='backdrop'
      ref={backdropRef}
    >
      <Container isMenuOpen={isMenuOpen}>
        <CloseIcon onClick={toggleMenu}>
          <FaTimes size={20} />
        </CloseIcon>
        <Menu>
          <MenuItem>
            <MenuLink
              to='hero'
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
            >
              Home
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to='how-it-works'
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
            >
              How it works
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to='menu'
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
            >
              Menu
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to='gallery'
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleMenu}
            >
              Gallery
            </MenuLink>
          </MenuItem>
        </Menu>

        <GetNotifiedButton
          to='contact'
          smooth={true}
          duration={500}
          offset={-70}
          onClick={toggleMenu}
        >
          <Button primary>Get Notified Early</Button>
        </GetNotifiedButton>
      </Container>
    </Backdrop>
  );
}
