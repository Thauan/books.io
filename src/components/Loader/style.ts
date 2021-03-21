import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  animation: ${rotate} 2s linear infinite;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
