import styled from 'styled-components';

export const Container = styled.li`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  margin: 1rem 0;

  transition: all 0.2s;

  &:hover {
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const Avatar = styled.img`
  height: 9rem;
  width: 9rem;
  margin-right: 0.8rem;
  border-radius: 1rem;
  cursor: pointer;
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

  a {
    font-size: 1.6rem;
    color: #828282;
    cursor: pointer;
  }
`;

export const Profission = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 1.6rem;
    color: #828282;
    cursor: pointer;
  }
`;

export const Bio = styled.p`
  margin-top: 0.5rem;
  font-size: 1.6rem;
  color: #828282;
`;
