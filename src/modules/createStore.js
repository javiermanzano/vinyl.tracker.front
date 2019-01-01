import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducers';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSagas);
  };

  store.runSagaTask();
  return store;
};
