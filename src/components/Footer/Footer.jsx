import { Logo } from '../Header/style';
import styled, { css } from 'styled-components';
import { bp } from '../../styles/breakpoints';
import { scrollToTop } from '../../utils/helpers';
import { NavLink } from '../NavLink';
import { Button } from '../Button';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer>
      <FooterSection>
        <Logo to='/' onClick={scrollToTop}>
          foodnet
        </Logo>

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
          <IconButton icon='facebook'>
            <FaFacebookF /> Facebook
          </IconButton>
          <IconButton icon='youtube'>
            <FaYoutube /> Youtube
          </IconButton>
          <IconButton icon='instagram'>
            <FaInstagram /> Instagram
          </IconButton>
          <IconButton icon='twitter'>
            <FaTwitter /> Twitter
          </IconButton>
        </SocialIcons>
      </FooterSection>

      <Copyright>
        <p>&copy; 2022 David Ojo</p>
      </Copyright>
    </footer>
  );
}

/**
 * STYLED COMPONENTS
 */
const FooterSection = styled.section`
  background-color: ${({ theme }) => theme.neutral.light};
  text-align: center;
  padding: 4rem 2rem 2rem;

  @media ${bp.tablet} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem;
  }

  @media ${bp.laptop} {
    padding-left: 8rem;
    padding-rightt: 8rem;
  }

  @media ${bp.laptop} {
    padding-left: 12rem;
    padding-right: 12rem;
  }
`;

const FooterMenu = styled.ul`
  margin: 1rem 0;

  @media ${bp.tablet} {
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
  grid-template-columns: repeat(auto-fill, 10rem);
  gap: 1rem;
  justify-content: center;
  justify-items: center;
  padding: 2rem 0;
  /* width: 100px; */
  margin: 0 auto;
  color: ${({ theme }) => theme.secondary};
  background-color: #fff;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > * {
    flex: 1 1 10em;
    max-width: 100%;
  }

  & > last-child {
    /* max-width:  */
  }

  @media ${bp.tablet} {
    margin: 0;
  }
`;

const IconButton = styled(Button)`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-color: transparent;

  ${(props) => {
    switch (props.icon) {
      case 'facebook':
        return css`
          background: #4267b2;
          color: #fff;
        `;
      case 'youtube':
        return css`
          background: #ff5a5f;
          color: #fff;
        `;
      case 'instagram':
        return css`
          background: #c13584;
          color: #fff;
        `;
      case 'twitter':
        return css`
          background: #1da1f2;
          color: #fff;
        `;
      default:
        return css`
          background: transparent;
        `;
    }
  }}
`;

const Copyright = styled.div`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  background-color: ${({ theme }) => theme.neutral.light};
  color: ${({ theme }) => theme.text.secondary};
`;
