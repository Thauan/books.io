import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Auth from '../../components/Auth';
import { Container } from './style';
import useWindowDimensions from '../../utils/useWindowDimensions';
// import { isAuthenticated } from '../../utils/storage';

export interface LoginProps {
  loading: boolean;
  logged: boolean;
  history?: any;
}

const Login: React.FC<LoginProps> = () => {
  const { height } = useWindowDimensions();
  const [loading, setLoading]: any = useState(false);
  const dispatch = useDispatch();

  const fetchAuth: any = async (data: any) => {
    setLoading(true);

    dispatch({ type: 'ERROR_CLEAR' });
    dispatch({ type: 'ASYNC_LOGIN', payload: data });
  };

  return (
    <Container height={height}>
      <Auth loading={loading} auth={fetchAuth} />
    </Container>
  );
};

export default Login;
