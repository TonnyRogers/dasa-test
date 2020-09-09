import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, BackButton, PageTitle } from './styles';

const Header = ({ pageTitle, toRoute, testId }) => {
  return (
    <Container>
      <BackButton to={toRoute} data-testid={testId}>
        <MdKeyboardArrowLeft color="#3D96FF" size={24} />
      </BackButton>
      <PageTitle>
        <h2>{pageTitle}</h2>
      </PageTitle>
    </Container>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  toRoute: PropTypes.string.isRequired,
  testId: PropTypes.string,
};

Header.defaultProps = {
  testId: null,
};

export default Header;
