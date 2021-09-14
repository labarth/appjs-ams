import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { appLoadingReducer } from 'common/reducers/reducers';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  appLoading: appLoadingReducer,
});

export default createRootReducer