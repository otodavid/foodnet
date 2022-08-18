import styled from 'styled-components';

export function Card ({ data }) {
  return (
    <CardContainer>
      <SvgWrapper>
        {/* svg icon */}
        <data.icon />
      </SvgWrapper>
      <div>
        <CardTitle>{data.title}</CardTitle>
        <p>{data.content}</p>
      </div>
    </CardContainer>
  );
}

/**
 * STYLED COMPONENTS
 */
const CardContainer = styled.div`
  flex: 1 1 250px;
  padding: 3.5rem .8rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: 5px 8px 13px rgba(0, 0, 0, 0.15);
  }
`;

const SvgWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  svg {
    width: 50px;
    height: 50px;
    fill: ${({ theme }) => theme.primary.main};
  }
`;
const CardTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text.secondary};
`;
