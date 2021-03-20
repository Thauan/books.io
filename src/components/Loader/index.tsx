// eslint-disable-next-line no-use-before-define
import React from 'react';
import { VscLoading } from 'react-icons/vsc';
import { Loading } from './style';

const Loader: React.FC = () => {
  return (
    <Loading>
      <VscLoading />
    </Loading>
  );
};

export default Loader;
