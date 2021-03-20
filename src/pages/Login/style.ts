import styled from 'styled-components';
import background from '../../assets/bg.png';
import logo from '../../assets/Logo.svg';
import subtitle from '../../assets/Title.svg';
import pixeltovw from '../../utils/pixeltovw';

export const Container = styled.div`
  width: auto;
  background-color: black;
  background-image: url(${background});
  background-size: cover;
  padding: 2rem;
  height: ${pixeltovw(654)};
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

export const ButtonSignIn = styled.button`
  color: #b22e6f;
  background: #fff;
  font-size: 1em;
  margin: 1em;
  border: 0;
  border-radius: 1rem;
  width: 85px;
  height: 36px;
  position: absolute;
  top: 24rem;
  left: 20rem;
  outline: 0;
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

export const FloatLabel = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  position: relative;
  margin-bottom: 1rem;
`;

export const InputTextField = styled.input`
  width: 368px;
  height: 60px;
  outline: 0;
  border: 1px solid #000;
  color: white;
  border-radius: 4px;
  background: #000000;
  opacity: 0.5;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 12px;
  color: #fff;
  pointer-events: none;
  position: absolute;
  opacity: 0.5;
  transform: translate(0, 10px) scale(1);
`;
