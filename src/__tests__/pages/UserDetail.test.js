import '@testing-library/jest-dom';
import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';
import UserDetail from '../../pages/UserDetail';

const apiMock = new MockAdapter(api);

describe('UserDetail page', () => {
  afterEach(cleanup);

  it('renders page', async () => {
    apiMock.onGet('/users/tonnyrogers').reply(200, [
      {
        id: 1,
        name: 'Antoniel Amaral',
        avatar_url: 'https://linktoavatar.com',
        login: 'tonnyrogers',
        location: 'Brazil',
        company: 'Autonomus',
        bio: 'Backend & Frontend developer',
      },
    ]);

    apiMock.onGet('/users/tonnyrogers/repos').reply(200, [
      {
        id: 1,
        name: 'Repo do Tony',
        description: 'descrição do repo',
      },
      {
        id: 2,
        name: 'Repo do Tony Node',
        description: 'descrição do repo',
      },
    ]);

    let wrapper;

    await act(async () => {
      wrapper = render(
        <MemoryRouter initialEntries={['/user/tonnyrogers']}>
          <Switch>
            <Route exact path="/user/:username" component={UserDetail} />
          </Switch>
        </MemoryRouter>
      );
    });

    wrapper.getByText('Repo do Tony');
    expect(wrapper.getByText('Detalhes do Usuário')).toBeInTheDocument();
  });
});
