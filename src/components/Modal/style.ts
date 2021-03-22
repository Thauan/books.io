import styled from 'styled-components';

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
    margin-top: 20rem;
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
