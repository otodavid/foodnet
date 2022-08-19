import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components';

const ComingSoon = () => {
  return (
    <Section>
      <h1>COMING SOON &#128512;</h1>
      <PageButton primary='true'>
        <Link to='/'>Go back</Link>
      </PageButton>
    </Section>
  );
};

export default ComingSoon;

const Section = styled.section`
  min-height: calc(100vh - 19rem);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-block: 10rem;

  h1 {
    text-align: center;
  }
`;

const PageButton = styled(Button)`
  width: 10rem;

  & > a {
    color: #fff;
  }
`;
