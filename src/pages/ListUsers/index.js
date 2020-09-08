import React from 'react';
import { MdSearch } from 'react-icons/md';

import {
  Container,
  FilterContainer,
  Filter,
  UserList,
  Content,
  FilterButton,
} from './styles';

import Header from '../../components/Header';
import User from '../../components/User';

const users = [
  {
    id: 1,
    avatar: 'https://avatars3.githubusercontent.com/u/37991230?v=4',
    name: 'Tony Amaral',
    username: 'tonnyrogers',
    location: 'Brazil',
    profission: 'Autonomo',
    bio: 'Oi eu sou o goku!',
  },
  {
    id: 2,
    avatar: 'https://avatars3.githubusercontent.com/u/37991230?v=4',
    name: 'Tony Amaral',
    username: 'tonnyrogers',
    location: 'Brazil',
    profission: 'Autonomo',
    bio: 'Oi eu sou o goku!',
  },
  {
    id: 3,
    avatar: 'https://avatars3.githubusercontent.com/u/37991230?v=4',
    name: 'Tony Amaral',
    username: 'tonnyrogers',
    location: 'Brazil',
    profission: 'Autonomo',
    bio: 'Oi eu sou o goku!',
  },
  {
    id: 4,
    avatar: 'https://avatars3.githubusercontent.com/u/37991230?v=4',
    name: 'Tony Amaral',
    username: 'tonnyrogers',
    location: 'Brazil',
    profission: 'Autonomo',
    bio: 'Oi eu sou o goku!',
  },
  {
    id: 5,
    avatar: 'https://avatars3.githubusercontent.com/u/37991230?v=4',
    name: 'Tony Amaral',
    username: 'tonnyrogers',
    location: 'Brazil',
    profission: 'Autonomo',
    bio: 'Oi eu sou o goku!',
  },
];

const ListUsers = () => {
  return (
    <Container>
      <Header toRoute="/" pageTitle="Buscar usuários" />
      <Content>
        <Filter>
          <FilterContainer>
            <MdSearch color="#757575" size={24} />
            <input type="text" name="filter" placeholder="Digite um nome..." />
          </FilterContainer>
          <FilterButton>Filtrar</FilterButton>
        </Filter>
        <UserList>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </UserList>
      </Content>
    </Container>
  );
};

export default ListUsers;
