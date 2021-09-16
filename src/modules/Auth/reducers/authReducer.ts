import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { setError } from '../actions';

interface AuthState {
  error: object | null;
}

const initialState = {
  error: null,
};

// need fix any type
export const authReducer = createReducer<AuthState, any>(initialState)
  .handleAction(
    setError,
    produce((draft: AuthState, { payload }) => {
      draft.error = payload;
    })
  );