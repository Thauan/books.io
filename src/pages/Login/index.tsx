// eslint-disable-next-line no-use-before-define
import React from 'react';
import {
  Container,
  AuthBox,
  ContainerLogo,
  Logo,
  Subtitle,
  InputLabel,
  FloatLabel,
  InputTextField,
  ButtonSignIn,
  Column6,
  ContentColumn,
} from './style';
import '../../App.css';

const Login: React.FC = () => {
  return (
    <Container>
      <AuthBox>
        <ContainerLogo>
          <Logo />
          <Subtitle />
        </ContainerLogo>
        <ContentColumn>
          <Column6>
            <FloatLabel>
              <InputTextField type="email" />
              <InputLabel>E-mail</InputLabel>
            </FloatLabel>
            <FloatLabel>
              <InputTextField type="email" />
              <InputLabel>Senha</InputLabel>
            </FloatLabel>
            <ButtonSignIn>Entrar</ButtonSignIn>
          </Column6>
        </ContentColumn>
      </AuthBox>
    </Container>
  );
};

export default Login;
