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

const Auth: React.FC<AuthProps> = ({ loading, auth }: any) => {
  const handleSubmit: any = (data: any) => {
    auth(data);
  };

  return (
    <AuthBox>
      <ContainerLogo>
        <Logo />
        <Subtitle />
      </ContainerLogo>
      <ContentColumn>
        <Column6>
          <Form onSubmit={handleSubmit}>
            <Input
              name="email"
              type="email"
              value="desafio@ioasys.com.br"
              label="E-mail"
            />
            <Input
              name="password"
              type="password"
              value="12341234"
              label="Senha"
            />
            <Button loading={loading} type="submit" onClick={false} />
          </Form>
        </Column6>
      </ContentColumn>
    </AuthBox>
  );
};

export default Auth;
