import produce from 'immer';
import { createReducer, ActionType } from 'typesafe-actions';
import { DefaultRootState } from 'react-redux';
import { setError, setUser } from './actions';

type userAction = ActionType<typeof setUser>;

const initialState = {};

interface AuthState {
  error: object | null;
}
const authInitialState = {
  error: null,
}

export const userReducer = createReducer<DefaultRootState, userAction>(initialState)
  .handleAction(setUser, (state, { payload }) => payload);

// need fixed it
export const authReducer = createReducer<AuthState, any>(authInitialState)
  .handleAction(
    setError,
    produce((draft: AuthState, { payload }) => {
      draft.error = payload;
    })
  );