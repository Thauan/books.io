import styled from 'styled-components';

export const Tooltip = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  padding: 1rem;
  width: 290px;
`;

export const TextTooltip = styled.div`
  color: #fff;
  display: flex;
  flex: 1;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  padding: 0.5rem;
`;
