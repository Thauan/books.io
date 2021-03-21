// eslint-disable-next-line no-use-before-define
import React from 'react';

import { ButtonSignIn } from './style';
import Loader from '../Loader';

interface ButtonProps {
  loading: boolean;
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ loading, onClick }: ButtonProps) => (
  <ButtonSignIn onClick={onClick}>
    {loading === false ? 'Entrar' : <Loader />}
  </ButtonSignIn>
);

export default Button;
