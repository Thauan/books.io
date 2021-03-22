import { useEffect } from 'react';
import { VscSignOut } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import history from '../../store/history';
import {
  ContainerLogo,
  Logo,
  Subtitle,
  BoxActions,
  Welcome,
  Username,
  HeaderBox,
  ButtonSignOut,
} from './style';
import { logout, isAuthenticated } from '../../utils/storage';

const Header: React.FC = () => {
  // const userData = useSelector((state: any) => state.auth.userData);
  const isAuth = (): any => (isAuthenticated() ? null : history.push('/'));
  const Logout = (): any => {
    logout();
    history.push('/');
  };

  const username = localStorage.getItem('@username');
  useEffect(() => {
    isAuth();
  }, []);

  return (
    <HeaderBox>
      <ContainerLogo>
        <Logo />
        <Subtitle />
      </ContainerLogo>
      <BoxActions>
        <Welcome>Bem vindo, </Welcome>
        <Username>{username || ''}</Username>
        <ButtonSignOut onClick={Logout}>
          <VscSignOut />
        </ButtonSignOut>
      </BoxActions>
    </HeaderBox>
  );
};

export default Header;
