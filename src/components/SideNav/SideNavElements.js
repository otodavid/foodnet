import styled from 'styled-components';
import { bp } from '../../styles/breakpoints';
import { Button } from '../Button';
import { NavLink } from '../NavLink';

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.8);
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? 'visible' : 'hidden')};
  z-index: ${({ isMenuOpen }) => (isMenuOpen ? '5' : '-1')};
  transition: all 0.3s;

  @supports (backdrop-filter: blur()) {
    backdrop-filter: blur(5px);
  }

  @media ${bp.tablet} {
    display: none;
    transition: none;
  }
`;

export const Container = styled.nav`
  width: min(80%, 20rem);
  height: 100%;
  margin-left: auto;
  background-color: ${({ theme }) => theme.background};
  padding: 2rem;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? 'translateX(0)' : 'translateX(100vw)'};
  transition: transform 0.3s;
`;

export const CloseIcon = styled.button`
  margin-left: auto;
  color: ${({ theme }) => theme.text.main};
`;
export const Menu = styled.ul`
  padding-block: 2rem;
`;
export const MenuItem = styled.li`
  margin: 1em 0em;
`;

export const MenuLink = styled(NavLink)`
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.3em 0.2em;
  cursor: pointer;
  color: ${({ theme }) => theme.text.main};

  &:hover {
    color: ${({ theme }) => theme.primary.main};
  }

  &.active {
    color: ${({ theme }) => theme.primary.main};
  }
`;

export const GetNotifiedButton = styled(Button)`
  display: block;
  width: 100%;
  margin-inline: auto;
  margin-top: 7rem;
  padding: 0;

  & > a {
    padding: 0.8em 1em;
    width: 100%;
    color: #fff;
  }
`;
