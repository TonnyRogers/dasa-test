import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../../components/Header';

describe('Header component', () => {
  it('renders the component', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <Header pageTitle="test title" toRoute="/test" testId="test-button" />
      </MemoryRouter>
    );

    const button = getByTestId('test-button');
    const title = getByText('test title');

    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
