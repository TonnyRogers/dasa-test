import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../../App';
import Main from '../../pages/Main';

describe('Main page', () => {
  afterEach(cleanup);

  it('renders welcome message', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    expect(getByText('Que tal encontrar seus amigos?')).toBeInTheDocument();
  });

  it('redirects to users list page', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const button = getByTestId('users-list-button');

    fireEvent.click(button);

    expect(getByText('Buscar usuários')).toBeInTheDocument();
  });

  it('redirects back to main page', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const button = getByTestId('back-main-button');

    fireEvent.click(button);

    expect(getByText('Que tal encontrar seus amigos?')).toBeInTheDocument();
  });
});
