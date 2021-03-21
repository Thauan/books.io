import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import ducks from './ducks';
import sagas from './sagas';
import history from './history';

const enhancers: any = [];

const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware),
  ...enhancers,
)(createStore)(ducks);

sagaMiddleware.run(sagas);

export { store };

// export default function store(): any {

// }

// const sagaMiddleware = createSagaMiddleware();

// sagaMiddleware.run(sagas);

// const middlewares = [sagaMiddleware, routerMiddleware(history)];

// const store = createStore(compose<any>(applyMiddleware(...middlewares)));

// export { store };
