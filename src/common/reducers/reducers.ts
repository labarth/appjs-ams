import { createReducer, ActionType } from 'typesafe-actions';
import { DefaultRootState } from 'react-redux';
import { setAppLoading } from '../actions/actions';

type Action = ActionType<typeof setAppLoading>;

const initialState = false;

export const appLoadingReducer = createReducer<DefaultRootState, Action>(initialState)
  .handleAction(setAppLoading, (state, { payload } : { payload: Boolean }) => payload);