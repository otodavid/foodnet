import { Link as SmoothLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bp } from '../../styles/breakpoints';

export const HeaderSection = styled.header`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  gap: 2rem;
  z-index: 4;
  background-color: ${({ theme }) => theme.neutral.light};

  @media ${bp.phablet} {
    padding-inline: 2rem 2rem;
  }

  @media ${bp.laptop} {
    --color: ${({ theme }) => theme.neutral.dark};
    width: 100%;
    padding: 1.5rem 6rem;
    /* background-color: #fff; */
    background-color: ${({ hasScrolled, theme }) =>
      hasScrolled ? theme.background : 'transparent'};
    transition: background-color 0.3s ease-in-out;
  }

  @media ${bp.desktop} {
    padding-left: 9rem;
  }
`;

export const Logo = styled(Link)`
  color: ${({ theme }) => theme.primary.main};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Nav = styled.ul`
  display: none;

  @media ${bp.tablet} {
    flex: 2;

    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    gap: 0.5rem;
  }
`;

export const NavLink = styled(SmoothLink)`
  font-size: 24px;
  color: ${({ theme }) => theme.text.main};
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary.main};
  }

  &.active {
    color: ${({ theme }) => theme.primary.main};
  }

  @media ${bp.tablet} {
    font-size: 1rem;
    font-weight: 500;
    position: relative;

    &::after,
    &.active::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 1rem;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.primary.main};
      transition: width 0.3s ease;
    }

    &:hover::after,
    &.after::after {
      width: 40%;
    }
  }

  @media ${bp.laptop} {
    &:hover {
      color: ${({ theme }) => theme.primary.main};
    }
  }
`;

export const ControlBtns = styled.div`
  flex-basis: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    vertical-align: middle;
  }

  @media ${bp.tablet} {
    flex-basis: 1.5rem;
    justify-content: center;
  }
`;

export const MenuIcon = styled.button`
  position: relative;
  z-index: 5;
  color: ${({ theme }) => theme.primary.main};
  font-size: 1.125rem;

  @media ${bp.tablet} {
    display: none;
  }
`;

export const ThemeChanger = styled.button`
  font-size: 1.125rem;
  color: ${({ theme }) =>
    theme === 'light' ? theme.text.secondary : theme.text.main};
`;
