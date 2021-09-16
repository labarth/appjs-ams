import { createSelector } from 'reselect';
import { RootState } from 'configureStore';

const routerState = (state: RootState) => state.router;

export const currentLocationSelector = createSelector(
  routerState,
  (router) => router.location.pathname,
);