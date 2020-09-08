import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  @media (min-width: 700px) {
    width: 70rem;
    align-self: center;
  }
`;

export const BackButton = styled(Link)`
  background: rgba(61, 150, 255, 0.3);
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  h2 {
    font-size: 1.8rem;
  }
`;
