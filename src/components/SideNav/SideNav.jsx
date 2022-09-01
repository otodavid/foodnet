import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
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

export function SideNav({
  isMounted,
  isHidden,
  closeNav,
  handleTransitionEnd,
}) {
  const firstFocusableElement = useRef(null);
  const lastFocusableElement = useRef(null);
  const portalRoot = document.querySelector('#portal-root');

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('backdrop')) return closeNav();
  };

  useEffect(() => {
    // prevent body from scrolling when menu is open
    const bodyEl = document.querySelector('body');
    if (isMounted) {
      bodyEl.style.height = '100vh';
      bodyEl.style.overflow = 'hidden';

      firstFocusableElement.current.focus();
    } else {
      bodyEl.style.height = 'auto';
      bodyEl.style.overflow = 'auto';
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted)
      return setTimeout(() => {
        firstFocusableElement.current.focus();
      }, 100);
  }, [isMounted]);

  useEffect(() => {
    const handleFocusTrap = (e) => {
      // close modal on esc keypress
      if (e.key === 'Escape') {
        console.log('hello world');
        closeNav();
        return;
      }

      // Focus trap
      if (
        e.key === 'Tab' &&
        !e.shiftKey &&
        e.target === lastFocusableElement.current
      ) {
        e.preventDefault();
        firstFocusableElement.current.focus();
      } else if (
        e.key === 'Tab' &&
        e.shiftKey &&
        e.target === firstFocusableElement.current
      ) {
        e.preventDefault();
        lastFocusableElement.current.focus();
      }
    };

    window.addEventListener('keydown', handleFocusTrap);

    return () => {
      window.removeEventListener('keydown', handleFocusTrap);
    };
  }, [closeNav]);

  return (
    <>
      {isMounted &&
        ReactDOM.createPortal(
          <Backdrop
            isHidden={isHidden}
            onClick={handleBackdropClick}
            className='backdrop'
            onTransitionEnd={handleTransitionEnd}
          >
            <Container isHidden={isHidden}>
              <CloseIcon
                autoFocus
                onClick={closeNav}
                ref={firstFocusableElement}
              >
                <FaTimes size={20} />
              </CloseIcon>

              <Menu>
                <MenuItem>
                  <MenuLink to='hero' closeNav={closeNav} displayName='Home'>
                    Home
                  </MenuLink>
                </MenuItem>

                <MenuItem>
                  <MenuLink
                    to='how-it-works'
                    closeNav={closeNav}
                    displayName='How it works'
                  />
                </MenuItem>

                <MenuItem>
                  <MenuLink
                    to='menu'
                    closeNav={closeNav}
                    displayName='Our Menu'
                  />
                </MenuItem>

                <MenuItem>
                  <MenuLink
                    to='gallery'
                    closeNav={closeNav}
                    displayName='Gallery'
                  />
                </MenuItem>
              </Menu>

              <GetNotifiedButton primary='true' ref={lastFocusableElement}>
                <NavLink
                  to='contact'
                  onClick={closeNav}
                  displayName='Get Notified Early'
                />
              </GetNotifiedButton>
            </Container>
          </Backdrop>,
          portalRoot
        )}
    </>
  );
}
