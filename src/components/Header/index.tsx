import { VscSignOut } from 'react-icons/vsc';
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
  return (
    <HeaderBox>
      <ContainerLogo>
        <Logo />
        <Subtitle />
      </ContainerLogo>
      <BoxActions>
        <Welcome>Bem vindo, </Welcome>
        <Username>Thauan</Username>
        <ButtonSignOut>
          <VscSignOut />
        </ButtonSignOut>
      </BoxActions>
    </HeaderBox>
  );
};

export default Header;
