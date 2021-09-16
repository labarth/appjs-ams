import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { appLoadingReducer } from 'common/reducers/reducers';
import { authReducer, userReducer } from 'modules/Auth/reducers';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  appLoading: appLoadingReducer,
  user: userReducer,
  auth: authReducer,
});

export default createRootReducer