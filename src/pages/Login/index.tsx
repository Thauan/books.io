import { useState } from 'react';
import axios from 'axios';
import history from '../../store/history';
import Auth from '../../components/Auth';
import delay from '../../utils/delay';
import { Container } from './style';
import useWindowDimensions from '../../utils/useWindowDimensions';

export interface LoginProps {
  loading: boolean;
  logged: boolean;
  history?: any;
}

const Login: React.FC<LoginProps> = () => {
  const { height } = useWindowDimensions();
  const [loading, setLoading]: any = useState(false);
  const [logged, setLogged]: any = useState(false);

  const fetchAuth: any = async () => {
    setLoading(true);

    axios
      .post('https://books.ioasys.com.br/api/v1/auth/sign-in', {
        email: 'desafio@ioasys.com.br',
        password: '12341234',
      })
      .then(function (response) {
        setLogged(true);
        delay(450);
        localStorage.setItem('auth@token', response.headers.authorization);
        setLoading(false);
        history.push('/home');
      })
      .catch(function (error) {
        setLogged(false);
        console.log(error);
      });
  };

  console.log(localStorage.getItem('auth@token'));

  return (
    <Container height={height}>
      <Auth loading={loading} auth={fetchAuth} />
    </Container>
  );
};

export default Login;
