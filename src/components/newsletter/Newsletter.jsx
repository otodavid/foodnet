import { Button } from '../Button';
import styled from 'styled-components';
import { bp } from '../../styles/breakpoints';

export function Newsletter({ id }) {
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
        <TextField placeholder='Email Address' />
        <Button primary="true">Subscribe</Button>
      </SubscribeForm>
    </Container>
  );
}

/**
 * STYLED COMPONENTS
 */
const Container = styled.div`
  padding: 4rem 2rem;
  text-align: center;
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

  & button {
    width: 100%;
    margin-top: 1.2rem;

    @media ${bp.tablet} {
      margin-top: 0;
      flex: 1 0 25%;
    }
  }

  @media ${bp.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const TextField = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  border: 2px solid ${({ theme }) => theme.primary.main};
  border-radius: 50px;
  width: 100%;
  color: ${({ theme }) => theme.text.main};
  transition: box-shadow 0.5s;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primary.main};
  }

  @media ${bp.tablet} {
    flex: 1 0 70%;
    margin-right: 1.5rem;
  }
`;
