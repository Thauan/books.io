// eslint-disable-next-line no-use-before-define
import React from 'react';

import { ButtonSignIn } from './style';
import Loader from '../Loader';

interface ButtonProps {
  loading: boolean;
  onClick: void;
}

const Button: React.FC<ButtonProps> = ({ loading, onClick }: ButtonProps) => {
  return (
    <ButtonSignIn>{loading === true ? 'Entrar' : <Loader />}</ButtonSignIn>
  );
};

export default Button;
