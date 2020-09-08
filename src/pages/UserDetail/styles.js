import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #f2f2f2;
`;

export const Content = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  margin: 1rem;
  padding: 1.5rem;

  @media (min-width: 700px) {
    width: 70rem;
    align-self: center;
  }
`;

export const User = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

export const Avatar = styled.img`
  height: 9rem;
  width: 9rem;
  margin-right: 0.8rem;
  border-radius: 1rem;
`;

export const UserInfo = styled.div``;

export const Name = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 1.6rem;
    color: #828282;
  }
`;

export const Profission = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 1.6rem;
    color: #828282;
  }
`;

export const Bio = styled.p`
  margin-top: 0.5rem;
  font-size: 1.6rem;
  color: #828282;
`;

export const Repositories = styled.div``;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const RepoList = styled.ul`
  overflow-y: scroll;
  height: 63vh;

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
`;

export const Repo = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0.5rem;
`;

export const RepoName = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const RepoDescription = styled.span`
  font-size: 1.6rem;
  color: #888888;
`;
