import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  flex: 1;

  background: #f2f2f2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const Filter = styled.div`
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    max-width: 70rem;
    align-self: center;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex: 1;
  background: #fff;
  align-items: center;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  input {
    height: 4rem;
    width: 100vw;
    border: none;
    color: #b1b1b1;
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
  }

  @media (min-width: 700px) {
    input {
      width: 50rem;
    }
  }
`;

export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.8rem;
  overflow-y: scroll;
  height: 80vh;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.7);
  }

  @media (min-width: 700px) {
    width: 70rem;
    align-self: center;
  }
`;

export const FilterButton = styled.button`
  visibility: unset;
  display: none;

  @media (min-width: 700px) {
    background-color: #3d96ff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    border-radius: 1rem;
    transition: all 0.2s;

    color: #fff;
    font-weight: bold;
    font-size: 2.4rem;

    &:hover {
      background-color: #0670ec;
    }
  }
`;
