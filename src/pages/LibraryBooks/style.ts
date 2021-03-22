import styled from 'styled-components';
import background from '../../assets/bg-home.png';
import logo from '../../assets/Logo-black.svg';
import subtitle from '../../assets/Title-black.svg';

interface StyleProps {
  height: any;
}

export const Container = styled.div<StyleProps>`
  width: auto;
  background-color: black;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  padding: 2rem;
  height: ${(props) => props.height - 64}px;
`;

export const ContainerModal = styled.div<StyleProps>`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 555555;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  height: ${(props) => props.height}px;

  @media (max-width: 650px) {
    padding: 1rem;
  }
`;

export const BoxActions = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Username = styled.h4`
  font-size: 12px;
  color: #333333;
  font-weight: bold;
`;

export const Welcome = styled.h4`
  font-size: 12px;
  color: #333333;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 650px) {
    flex-direction: column;
  }
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

export const ButtonSignOut = styled.button`
  background: transparent;
  font-size: 1em;
  margin: 1em;
  height: 40px;
  width: 40px;
  border: 1px solid #333333;
  border-radius: 20rem;
  outline: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 220px 220px 220px;
  grid-gap: 1rem;

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
`;

export const BookName = styled.h1`
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  font-weight: 600;
`;

export const AuthorName = styled.h3`
  color: #ab2680;
  font-style: normal;
  font-weight: 400;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  margin: 0;
`;

export const BoxLoading = styled.div<StyleProps>`
  justify-content: center;
  align-content: center;
  display: flex;
  width: 100%;
  height: ${(props) => props.height / 2}px;
`;

export const CoverBook = styled.img`
  width: 8.288rem;
  height: auto;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const BookInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageCount = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const Publisher = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const PublishedAt = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;
