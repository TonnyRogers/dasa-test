import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { Container, BackButton, PageTitle } from './styles';

const Header = ({ pageTitle, toRoute }) => {
  return (
    <Container>
      <BackButton to={toRoute}>
        <MdKeyboardArrowLeft color="#3D96FF" size={24} />
      </BackButton>
      <PageTitle>
        <h2>{pageTitle}</h2>
      </PageTitle>
    </Container>
  );
};

export default Header;
