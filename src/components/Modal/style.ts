import styled from 'styled-components';

interface StyleProps {
  height: any;
}

export const ContainerModal = styled.div`
  width: 769px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  position: absolute;
  z-index: 5555555;
  padding: 1rem;

  @media (max-width: 650px) {
    width: fit-content;
    margin-top: 35rem;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  }
`;

export const Content = styled.div`
  padding: 1rem;
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BoxLoading = styled.div<StyleProps>`
  justify-content: center;
  align-content: center;
  display: flex;
  width: 100%;
  height: ${(props) => props.height / 2}px;
`;

export const HeaderModal = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  background: #fff;
  font-size: 1em;
  margin: 1em;
  height: 40px;
  width: 40px;
  border: 1px solid #fff;
  border-radius: 20rem;
  outline: 0;
`;

export const Container = styled.div<StyleProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: ${(props) => props.height - 60}px;
`;
