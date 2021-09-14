import { createReducer } from 'typesafe-actions';
import { setAppLoading } from '../actions/actions';

const initialState = false;

export const appLoadingReducer = createReducer(initialState)
  .handleAction(setAppLoading, (state: any, { payload } : { payload: Boolean}) => payload);