import React from 'react';
import { MdRoom, MdBusinessCenter } from 'react-icons/md';

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

const User = ({ name, username, location, profission, bio, avatar }) => {
  return (
    <Container>
      <Avatar src={avatar} />
      <UserInfo>
        <Name> {`${name}(${username})`}</Name>
        <Details>
          <Location>
            <MdRoom color="#3D96FF" size={24} />
            <p>{location}</p>
          </Location>
          <Profission>
            <MdBusinessCenter color="#3D96FF" size={24} />
            <p>{profission}</p>
          </Profission>
        </Details>
        <Bio>{bio}</Bio>
      </UserInfo>
    </Container>
  );
};

export default User;
