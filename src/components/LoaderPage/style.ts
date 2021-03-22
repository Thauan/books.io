import styled, { keyframes } from 'styled-components';
import { VscLoading } from 'react-icons/vsc';

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
  font-size: 5rem !important;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-content: center;
  display: flex;
`;

export const IconLoading = styled(VscLoading)`
  font-size: 4rem;
  color: #3333333;
`;
