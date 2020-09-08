import React from 'react';
import { MdRoom, MdBusinessCenter, MdStar } from 'react-icons/md';
import { useHistory, Link } from 'react-router-dom';

import {
  Container,
  Avatar,
  UserInfo,
  Name,
  Details,
  Location,
  Profission,
  Bio,
} from './styles';

const User = ({ user }) => {
  const history = useHistory();

  return (
    <Container>
      <Avatar
        src={user.avatar_url}
        onClick={(e) => history.push(`/user/${user.login}`)}
      />
      <UserInfo>
        <Name> {`${user.login}`}</Name>
        <Details>
          <Location>
            <MdStar color="#3D96FF" size={24} />
            <a href={user.starred_url} target="_blank">
              Repos Favoritos
            </a>
          </Location>
          <Profission>
            <MdBusinessCenter color="#3D96FF" size={24} />
            <a href={user.organizations_url} target="_blank">
              Organização
            </a>
          </Profission>
        </Details>
        <Bio>{user.bio}</Bio>
      </UserInfo>
    </Container>
  );
};

export default User;
