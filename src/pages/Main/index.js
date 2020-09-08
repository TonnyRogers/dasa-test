import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, ButtonContainer, InfoContainer } from './styles';
import peopleImg from '../../assets/people.jpg';

const Main = () => {
  return (
    <Container>
      <Content>
        <img src={peopleImg} alt="People" />
        <InfoContainer>
          <h3>Que tal encontrar seus amigos?</h3>
          <p>
            Compatilhar seus projetos, desafios e novas ideias através do
            Github.
          </p>
          <span>JUNTE A GALERA E VAMOS NESSA!</span>
        </InfoContainer>
        <ButtonContainer>
          <Link to="/list-users"> Vamos lá! </Link>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Main;
