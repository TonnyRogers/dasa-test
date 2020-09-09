/* eslint-disable no-multi-assign */
import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import api from '../../services/api';
import ListUsers from '../../pages/ListUsers';

const mockCreateItem = (api.get = jest.fn());

describe('List Users page', () => {
  afterEach(cleanup);

  it('renders page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ListUsers />
      </MemoryRouter>
    );

    expect(getByText('Buscar usuários')).toBeInTheDocument();
  });

  it('renders user list', async () => {
    mockCreateItem.mockResolvedValueOnce({
      data: {
        items: [
          {
            id: 1,
            avatar_url: 'kdsapokdosakdaosp',
            login: 'tonnyrogers',
            starred_url: 'sadasdas',
            organizations_url: 'asdasdsa',
          },
        ],
      },
    });

    let wrapper;

    await act(async () => {
      wrapper = render(
        <MemoryRouter>
          <ListUsers />
        </MemoryRouter>
      );
    });

    const input = wrapper.getByTestId('users-list-input');
    const filterButton = wrapper.getByTestId('users-list-filter-button');

    const type = 'tonnyrogers';
    await act(async () => {
      fireEvent.change(input, { target: { value: type } });
      fireEvent.click(filterButton);
    });

    expect(mockCreateItem).toBeCalledTimes(1);

    expect(wrapper.getByText(type)).toBeInTheDocument();
  });
});
