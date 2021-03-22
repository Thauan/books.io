// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Loading, IconLoading } from './style';

const LoaderPage: React.FC = () => {
  return (
    <Loading>
      <IconLoading />
    </Loading>
  );
};

export default LoaderPage;
