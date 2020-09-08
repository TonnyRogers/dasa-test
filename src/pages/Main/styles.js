import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;

  display: flex;
  flex: 1;

  @media (min-width: 1100px) {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  width: 90vw;

  img {
    margin-top: 2rem;
    object-fit: contain;
    width: auto;

    @media (min-width: 1100px) {
      grid-area: img;
    }
  }

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 60fr 40fr;
    grid-template-areas:
      'img info'
      'img buttons';
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  h3 {
    font-weight: bold;
    font-size: 2.6rem;
  }

  p {
    color: #737373;
    font-size: 1.8rem;
    margin: 2rem 5rem;
    text-align: center;
  }

  span {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 2rem;
    color: #105f9a;
  }

  @media (min-width: 1100px) {
    grid-area: info;
    justify-content: flex-end;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;

  a {
    background-color: #3d96ff;
    height: 5rem;
    width: 50rem;
    border-radius: 1rem;
    padding: 1rem 0;

    text-align: center;
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    margin-top: 0;

    a {
      width: 30rem;
    }
  }
`;
