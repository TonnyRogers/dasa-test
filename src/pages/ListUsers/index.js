import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import api from '../../services/api';

import {
  Container,
  FilterContainer,
  Filter,
  UserList,
  Content,
  FilterButton,
  EmptyUsers,
} from './styles';

import Header from '../../components/Header';
import User from '../../components/User';

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState('');

  async function handleSearch(e) {
    e.preventDefault();
    const response = await api.get(`/search/users?q=${userName}`);
    setUsers(response.data.items);
  }

  return (
    <Container>
      <Header toRoute="/" pageTitle="Buscar usuários" />
      <Content>
        <Filter onSubmit={(e) => handleSearch(e)}>
          <FilterContainer>
            <MdSearch color="#757575" size={24} />
            <input
              type="text"
              name="filter"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Digite um nome..."
            />
          </FilterContainer>
          <FilterButton type="submit">Filtrar</FilterButton>
        </Filter>
        <UserList>
          {users[0] ? (
            users.map((user) => <User key={user.id} user={user} />)
          ) : (
            <EmptyUsers>
              <h4>Sem usuários?</h4>
              <span>Pesquise no filtro acima!</span>
            </EmptyUsers>
          )}
        </UserList>
      </Content>
    </Container>
  );
};

export default ListUsers;
