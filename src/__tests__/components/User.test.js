import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import User from '../../components/User';

describe('User component', () => {
  it('renders the component', () => {
    const user = {
      id: 1,
      login: 'tonnyrogers',
      avatar_url: 'https://linktothephoto.com',
      starred_url: 'https://linktostarsgithub.com',
      organizations_url: 'https://linktouserorg.com',
    };

    const { getByText } = render(
      <MemoryRouter>
        <User key={user.id} user={user} />
      </MemoryRouter>
    );

    expect(getByText('tonnyrogers')).toBeInTheDocument();
  });
});
