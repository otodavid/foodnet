import { Logo } from '../Header/HeaderElements';
import styled, { css } from 'styled-components';
import { bp } from '../../styles/breakpoints';
import { scrollToTop } from '../../utils/helpers';
import { NavLink } from '../NavLink';
import { Button } from '../Button';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeModeContext } from '../../context/ThemeModeContext';

export function Footer() {
  const themeMode = useContext(ThemeModeContext);

  return (
    <FooterWrapper>
      <FooterSection>
        <FooterLogo to='/' onClick={scrollToTop}>
          foodnet
        </FooterLogo>

        <FooterMenu>
          <li>
            <FooterLink to='how-it-works' displayName='How it works' />
          </li>
          <li>
            <FooterLink to='menu' displayName='Our Menu' />
          </li>
          <li>
            <FooterLink to='gallery' displayName='Gallery' />
          </li>
        </FooterMenu>

        <SocialIcons>
          <IconButton icon='facebook' themeMode={themeMode}>
            <FaFacebookF />
            <span>Facebook</span>
          </IconButton>

          <IconButton icon='youtube' themeMode={themeMode}>
            <FaYoutube />
            <span>Youtube</span>
          </IconButton>

          <IconButton icon='instagram' themeMode={themeMode}>
            <FaInstagram />
            <span>Instagram</span>
          </IconButton>

          <IconButton icon='twitter' themeMode={themeMode}>
            <FaTwitter />
            <span>Twitter</span>
          </IconButton>
        </SocialIcons>
      </FooterSection>

      <Copyright themeMode={themeMode}>
        <p>&copy; 2022 David Ojo</p>
      </Copyright>
    </FooterWrapper>
  );
}

/**
 * STYLED COMPONENTS
 */
const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.neutral.light};
  transition: background-color 0.2s ease-in;
`;

const FooterSection = styled.div`
  max-width: 50rem;
  text-align: center;
  padding: 4rem 2rem 2rem;
  margin-inline: auto;

  @media ${bp.phablet} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem;
  }
`;

const FooterLogo = styled(Logo)`
  font-size: 1rem;
`;

const FooterMenu = styled.ul`
  margin: 1rem 0;

  @media ${bp.phablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

const FooterLink = styled(NavLink)`
  color: ${({ theme }) => theme.text.secondary};
  padding: 0.5rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary.main};
  }
`;

const SocialIcons = styled.div`
  flex: 1 1 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  justify-content: center;
  padding: 2rem 0;
  margin: 0 auto;
  color: ${({ theme }) => theme.secondary};

  @media ${bp.tablet} {
    grid-template-columns: repeat(4, 1fr);
    margin: 0;
  }
`;

const IconButton = styled(Button)`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-color: ${({ themeMode }) =>
    themeMode === 'light' ? 'rgb(0, 0, 0, 0.5)' : 'rgb(255, 255, 255, 0.5)'};
  color: ${({ themeMode }) =>
    themeMode === 'light' ? 'rgb(0, 0, 0, 0.5)' : 'rgb(255, 255, 255, 0.5)'};

  &:hover {
    border-color: transparent;
    color: #fff;

    ${(props) => {
      switch (props.icon) {
        case 'facebook':
          return css`
            background-color: #4267b2;
          `;
        case 'youtube':
          return css`
            background-color: #ff5a5f;
          `;
        case 'instagram':
          return css`
            background-color: #c13584;
          `;
        case 'twitter':
          return css`
            background-color: #1da1f2;
          `;
        default:
          return css`
            background-color: transparent;
          `;
      }
    }}
  }
`;

const Copyright = styled.div`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  background-color: ${({ themeMode }) =>
    themeMode === 'light' ? '#e8e7e7' : '#131313'};
  color: ${({ theme }) => theme.text.secondary};
  transition: background-color 0.2s ease-in;
`;
