import React, { useEffect, useState } from 'react';
import { MdRoom, MdBusinessCenter } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import {
  Container,
  Content,
  User,
  Avatar,
  UserInfo,
  Name,
  Details,
  Location,
  Profission,
  Bio,
  Repositories,
  Title,
  RepoList,
  Repo,
  RepoName,
  RepoDescription,
} from './styles';
import Header from '../../components/Header';

const UserDetail = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function getUserRepos() {
      const response = await api.get(`/users/${username}/repos`);

      setRepositories(response.data);
    }

    async function getUserDetails() {
      const response = await api.get(`/users/${username}`);

      setUser(response.data);

      getUserRepos();
    }

    getUserDetails();
  }, []);

  return (
    <Container>
      <Header toRoute="/list-users" pageTitle="Detalhes do Usuário" />
      <Content>
        <User>
          <Avatar src={user.avatar_url || ''} />
          <UserInfo>
            <Name>
              {user.name}({user.login})
            </Name>
            <Details>
              <Location>
                <MdRoom color="#3D96FF" size={24} />
                <p>{user.location}</p>
              </Location>
              <Profission>
                <MdBusinessCenter color="#3D96FF" size={24} />
                <p>{user.company}</p>
              </Profission>
            </Details>
            <Bio>{user.bio}</Bio>
          </UserInfo>
        </User>
        <Repositories>
          <Title>Repositórios</Title>
          <RepoList>
            {repositories.map((repo) => (
              <Repo key={repo.id}>
                <RepoName>{repo.name}</RepoName>
                <RepoDescription>{repo.description}</RepoDescription>
              </Repo>
            ))}
          </RepoList>
        </Repositories>
      </Content>
    </Container>
  );
};

export default UserDetail;
