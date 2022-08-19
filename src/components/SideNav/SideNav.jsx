import React, { useEffect, useRef } from 'react';
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
import { NavLink } from '../NavLink';

export function SideNav({ isMenuOpen, toggleMenu }) {
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
            <MenuLink to='hero' toggleMenu={toggleMenu} displayName='Home' />
          </MenuItem>
          <MenuItem>
            <MenuLink
              to='how-it-works'
              toggleMenu={toggleMenu}
              displayName='How it works'
            />
          </MenuItem>
          <MenuItem>
            <MenuLink
              to='menu'
              toggleMenu={toggleMenu}
              displayName='Our Menu'
            />
          </MenuItem>
          <MenuItem>
            <MenuLink
              to='gallery'
              toggleMenu={toggleMenu}
              displayName='Gallery'
            />
          </MenuItem>
        </Menu>

        <GetNotifiedButton primary>
          <NavLink
            to='contact'
            onClick={toggleMenu}
            displayName='Get Notified Early'
          />
        </GetNotifiedButton>
      </Container>
    </Backdrop>
  );
}
