import { createSelector } from 'reselect';
import { appState } from 'common/selectors/selectors';
import { AUTH_ERROR_TYPE } from './constants';

const authSelector = createSelector(
  appState,
  (state) => state.auth,
);

export const emailBusyErrorSelector = createSelector(
  authSelector,
  (auth) => auth.error.type === AUTH_ERROR_TYPE.EMAIL_IS_BUSY_ERROR ? auth.error : null
)