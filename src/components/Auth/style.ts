import styled from 'styled-components';
import background from '../../assets/bg.png';
import logo from '../../assets/Logo.svg';
import subtitle from '../../assets/Title.svg';
// import pixeltovw from '../../utils/pixeltovw';
// import viewportWindow from '../../utils/viewportWindow';

interface StyleProps {
  height: any;
}

// ${pixeltovw((props: { height: any }) => props.height)};

export const Container = styled.div<StyleProps>`
  width: auto;
  background-color: black;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  padding: 2rem;
  height: ${(props) => props.height - 64}px;
`;

export const Column6 = styled.div`
  width: 50%;
  justify-content: center;
`;

export const ContentColumn = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 8rem;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  width: 21rem;
`;

export const Logo = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 290px;
  height: 50px;
`;

export const Subtitle = styled.div`
  background-image: url(${subtitle});
  background-size: contain;
  background-repeat: no-repeat;
  height: 33px;
  width: inherit;
  margin-bottom: 0.2rem;
`;

export const AuthBox = styled.div`
  width: 400px;
  padding: 2rem;
  height: fit-content;
`;
