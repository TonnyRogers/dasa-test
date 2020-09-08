import React from 'react';
import { MdRoom, MdBusinessCenter } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

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
    <Container onClick={(e) => history.push(`/user/${user.username}`)}>
      <Avatar src={user.avatar} />
      <UserInfo>
        <Name> {`${user.name}(${user.username})`}</Name>
        <Details>
          <Location>
            <MdRoom color="#3D96FF" size={24} />
            <p>{user.location}</p>
          </Location>
          <Profission>
            <MdBusinessCenter color="#3D96FF" size={24} />
            <p>{user.profission}</p>
          </Profission>
        </Details>
        <Bio>{user.bio}</Bio>
      </UserInfo>
    </Container>
  );
};

export default User;
