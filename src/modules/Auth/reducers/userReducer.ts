import { ActionType, createReducer } from 'typesafe-actions';
import { DefaultRootState } from 'react-redux';
import { setUser } from '../actions';

type Actions = ActionType<typeof setUser>;

const initialState = {};

export const userReducer = createReducer<DefaultRootState, Actions>(initialState)
  .handleAction(setUser, (state, { payload }) => payload);