import { createSelector } from 'reselect';
import { RootState } from 'configureStore';

const authState = (state: RootState ) => state.auth;

const EMAIL_IS_BUSY_ERROR = 'email_is_busy';

const AUTH_ERROR_TYPE = {
  EMAIL_IS_BUSY_ERROR,
};

export const emailBusyErrorSelector = createSelector(
  authState,
  (auth) => {
    // @ts-ignore
    if (!auth.error) {
      return null;
    }

    // @ts-ignore
    return auth.error.type === AUTH_ERROR_TYPE.EMAIL_IS_BUSY_ERROR ? auth.error : null;
  }
)