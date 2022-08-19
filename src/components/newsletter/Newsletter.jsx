import { Button } from '../Button';
import styled from 'styled-components';
import { bp } from '../../styles/breakpoints';
import { useContext } from 'react';
import { ThemeModeContext } from '../../context/ThemeModeContext';

export function Newsletter({ id }) {
  const themeMode = useContext(ThemeModeContext);
  return (
    <Container id={id}>
      <NewsletterIntro>
        <h3>Get Notified</h3>
        <p>
          Lorem ipsum dolor sit ametconsectetur adipisicing elit.Cumque harum
          nihil sunt quasiveritatis nemo necessitatibusperferendis animi dicta,
          ratio
        </p>
      </NewsletterIntro>

      <SubscribeForm>
        <TextField placeholder='Email Address' themeMode={themeMode} />
        <FormButton primary='true'>Subscribe</FormButton>
      </SubscribeForm>
    </Container>
  );
}

/**
 * STYLED COMPONENTS
 */
const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 4rem 2rem;
  text-align: center;
  transition: background-color 0.2s ease-in;

`;

const NewsletterIntro = styled.div`
  max-width: 500px;
  margin: 0 auto;

  h3 {
    margin-bottom: 10px;
  }
`;

const SubscribeForm = styled.div`
  margin: 0 auto;
  max-width: 550px;
  margin-top: 2rem;

  @media ${bp.phablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const TextField = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.text.main};
  border-radius: .625em;
  box-shadow: ${({ themeMode, theme }) =>
    themeMode === 'light'
      ? 'inset rgb(0,0,0, .5) 0 0 0 1px'
      : 'inset rgb(255,255,255,0.5) 0 0 0 1px'};
  transition: box-shadow 0.3s;

  &:hover,
  &:focus {
    box-shadow: ${({ themeMode, theme }) =>
      themeMode === 'light'
        ? 'inset #202124 0 0 0 1px'
        : 'inset rgb(255,255,255) 0 0 0 1px'};
  }

  @media ${bp.phablet} {
    flex: 1 1 65%;
  }
`;

const FormButton = styled(Button)`
  width: 100%;
  margin-top: 1.2rem;

  @media ${bp.phablet} {
    margin-top: 0;
    flex: 1 1 25%;
  }
`;
