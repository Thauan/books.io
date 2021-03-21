import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import Button from '../Button';
import Input from '../Input';
import ErrorToltip from '../ErrorToltip';

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
  const formRef: any = useRef(null);
  const [errors, setErrors] = useState([]);

  const handleSubmit: any = async (data: any, { reset }: any) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O email é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      auth(data);
      reset();
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages: any = [];

        error.inner.forEach((err: any, index: any) => {
          const { message } = err;
          errorMessages[index] = { message };
        });

        console.log(errorMessages);
        // formRef.current.setErrors(errorMessages);
        setErrors(errorMessages);
      }
    }
  };

  return (
    <AuthBox>
      <ContainerLogo>
        <Logo />
        <Subtitle />
      </ContainerLogo>
      <ContentColumn>
        <Column6>
          <Form onSubmit={handleSubmit} ref={formRef}>
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
            <ErrorToltip error={errors} />
          </Form>
        </Column6>
      </ContentColumn>
    </AuthBox>
  );
};

export default Auth;
