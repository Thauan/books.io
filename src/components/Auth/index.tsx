// import React from 'react';
import { Form } from '@unform/web';
import Button from '../Button';
import Input from '../Input';
import {
  AuthBox,
  ContainerLogo,
  Logo,
  Subtitle,
  Column6,
  ContentColumn,
} from './style';

export interface AuthProps {
  loading: boolean;
  auth?: any;
}

const handleSubmit: any = (data: any) => {
  console.log(data);
};

const Auth: React.FC<AuthProps> = ({ loading, auth }: any) => {
  return (
    <AuthBox>
      <ContainerLogo>
        <Logo />
        <Subtitle />
      </ContainerLogo>
      <ContentColumn>
        <Column6>
          <Form onSubmit={handleSubmit}>
            <Input name="email" type="email" label="E-mail" />
            <Input name="password" type="password" label="Senha" />
          </Form>
          <Button loading={loading} onClick={auth} />
        </Column6>
      </ContentColumn>
    </AuthBox>
  );
};

export default Auth;
