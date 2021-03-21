import { useEffect } from 'react';
import { VscSignOut } from 'react-icons/vsc';
import { logout, isAuthenticated } from '../../utils/storage';
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

const Header: React.FC = () => {
  const isAuth = (): any => (isAuthenticated() ? null : history.push('/'));
  const Logout = (): any => {
    logout();
    history.push('/');
  };

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
        <Username>Thauan</Username>
        <ButtonSignOut onClick={Logout}>
          <VscSignOut />
        </ButtonSignOut>
      </BoxActions>
    </HeaderBox>
  );
};

export default Header;
