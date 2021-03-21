// eslint-disable-next-line no-use-before-define
import React from 'react';

import { ButtonSignIn } from './style';
import Loader from '../Loader';

interface ButtonProps {
  loading: boolean;
  onClick: any;
  type: any;
}

const Button: React.FC<ButtonProps> = ({
  loading,
  onClick,
  type,
}: ButtonProps) => (
  <ButtonSignIn
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick={onClick !== false ? onClick : () => {}}
    type={type || 'button'}
  >
    {loading === false ? 'Entrar' : <Loader />}
  </ButtonSignIn>
);

export default Button;
