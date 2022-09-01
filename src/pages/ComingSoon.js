import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components';

const ComingSoon = () => {
  return (
    <Section>
      <h1>COMING SOON &#128512;</h1>
      <p>
        Wait, don't go yet. Subscribe to our newsletter to know when we launch
        and other exciting news{' '}
      </p>
      <PageButton forwardedAs={Link} to='/' primary='true'>
        Sign up
      </PageButton>
    </Section>
  );
};

export default ComingSoon;

const Section = styled.section`
  width: calc(100% - 2rem);
  min-height: calc(100vh - 19rem);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-block: 10rem;
  margin-inline: auto;

  h1 {
    text-align: center;
  }

  p {
    width: 40ch;
  }
`;

const PageButton = styled(Button)`
  width: 10rem;
  margin-top: 2rem;

  & > a {
    color: #fff;
  }
`;
