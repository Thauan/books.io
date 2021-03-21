/* eslint-disable no-use-before-define */
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
