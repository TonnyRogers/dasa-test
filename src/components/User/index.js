import React from 'react';
import { MdBusinessCenter, MdStar } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
  Avatar,
  UserInfo,
  Name,
  Details,
  Location,
  Profission,
} from './styles';

const User = ({ user }) => {
  const history = useHistory();

  return (
    <Container>
      <Avatar
        src={user.avatar_url}
        onClick={() => history.push(`/user/${user.login}`)}
      />
      <UserInfo>
        <Name> {`${user.login}`}</Name>
        <Details>
          <Location>
            <MdStar color="#3D96FF" size={24} />
            <a href={user.starred_url} target="_blank" rel="noreferrer">
              Repos Favoritos
            </a>
          </Location>
          <Profission>
            <MdBusinessCenter color="#3D96FF" size={24} />
            <a href={user.organizations_url} target="_blank" rel="noreferrer">
              Organização
            </a>
          </Profission>
        </Details>
      </UserInfo>
    </Container>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    starred_url: PropTypes.string.isRequired,
    organizations_url: PropTypes.string.isRequired,
  }).isRequired,
};

User.defaultProps = {};

export default User;
