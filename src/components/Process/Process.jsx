import { Card } from '../Card';
import styled from 'styled-components';
import { bp } from '../../styles/breakpoints';
import { ProcessData } from '../../data';

export function Process({ id }) {
  return (
    <ProcessSection id={id}>
      <Heading2>how it works</Heading2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam,
        sed id eum assumenda rerum iure aut dolore aliquid
      </p>

      <CardList>
        {ProcessData.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </CardList>
    </ProcessSection>
  );
}

/**
 * STYLED COMPONENTS
 */
const ProcessSection = styled.section`
  text-align: center;
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.neutral.light};
  position: relative;
  z-index: 2;

  & p,
  h2 {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Heading2 = styled.h2`
  text-align: center;
  text-transform: capitalize;
`;

const CardList = styled.div`
  margin: 3rem auto;
  padding: 0rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  gap: 1.5rem;
  max-width: 950px;

  @media ${bp.tablet} {
    padding: 0 2rem;
  }
`;
