import React from 'react';
import { MdRoom, MdBusinessCenter } from 'react-icons/md';

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

const user = {
  id: 1,
  avatar: 'https://avatars3.githubusercontent.com/u/37991230?v=4',
  name: 'Tony Amaral',
  username: 'tonnyrogers',
  location: 'Brazil',
  profission: 'Autonomo',
  bio: 'Oi eu sou o goku!',
};

const UserDetail = () => {
  return (
    <Container>
      <Header toRoute="/list-users" pageTitle="Detalhes do Usuário" />
      <Content>
        <User>
          <Avatar src={user.avatar} />
          <UserInfo>
            <Name>
              {user.name}({user.username})
            </Name>
            <Details>
              <Location>
                <MdRoom color="#3D96FF" size={24} />
                <p>{user.location}</p>
              </Location>
              <Profission>
                <MdBusinessCenter color="#3D96FF" size={24} />
                <p>{user.profission}</p>
              </Profission>
            </Details>
            <Bio>{user.bio}</Bio>
          </UserInfo>
        </User>
        <Repositories>
          <Title>Repositórios</Title>
          <RepoList>
            <Repo>
              <RepoName>Localweb</RepoName>
              <RepoDescription>
                Projeto bem interessante venha participar
              </RepoDescription>
            </Repo>
            <Repo>
              <RepoName>Localweb</RepoName>
              <RepoDescription>
                Projeto bem interessante venha participar
              </RepoDescription>
            </Repo>
            <Repo>
              <RepoName>Localweb</RepoName>
              <RepoDescription>
                Projeto bem interessante venha participar
              </RepoDescription>
            </Repo>
            <Repo>
              <RepoName>Localweb</RepoName>
              <RepoDescription>
                Projeto bem interessante venha participar
              </RepoDescription>
            </Repo>
            <Repo>
              <RepoName>Localweb</RepoName>
              <RepoDescription>
                Projeto bem interessante venha participar
              </RepoDescription>
            </Repo>
            <Repo>
              <RepoName>Localweb</RepoName>
              <RepoDescription>
                Projeto bem interessante venha participar
              </RepoDescription>
            </Repo>
            <Repo>
              <RepoName>Localweb</RepoName>
              <RepoDescription>
                Projeto bem interessante venha participar
              </RepoDescription>
            </Repo>
          </RepoList>
        </Repositories>
      </Content>
    </Container>
  );
};

export default UserDetail;
