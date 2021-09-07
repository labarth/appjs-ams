import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';
import mainSaga from './sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  let enhancer = null;

  if (process.env.NODE_ENV === 'development') {
    enhancer = composeWithDevTools(
      applyMiddleware(
        logger,
        sagaMiddleware,
        routerMiddleware(history),
      ),
    );
  } else {
    enhancer = compose(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
      )
    );
  }

  return createStore(createRootReducer(history), enhancer);
}

export const store = configureStore();

sagaMiddleware.run(mainSaga);