import { createReducer, ActionType } from 'typesafe-actions';
import { DefaultRootState } from 'react-redux';
import { setUser } from '../actions/signInActions';

type Action = ActionType<typeof setUser>;

const initialState = {};

export const userReducer = createReducer<DefaultRootState, Action>(initialState)
  .handleAction(setUser, (state, { payload }) => payload);