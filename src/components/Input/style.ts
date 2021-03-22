import styled from 'styled-components';

export const FloatLabel = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  position: relative;
  margin-bottom: 1rem;
`;

export const InputTextField = styled.input`
  width: 368px;
  height: 65px;
  outline: 0;
  border: 1px solid #000;
  color: white;
  padding: 1rem 1rem 0 1rem;
  border-radius: 4px;
  background: #000000;
  color: #fff;
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
  transform: translate(0, 7px) scale(1);
`;
