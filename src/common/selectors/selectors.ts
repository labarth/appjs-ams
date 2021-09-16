import { createSelector } from 'reselect';
import { RootState } from 'configureStore';

const appState = (state: RootState) => state;

export const routerSelector = createSelector(
  appState,
  (state: RootState) => state.router,
);

export const isAppLoadingSelector = createSelector(
  appState,
  (state: RootState) => state.appLoading,
);

export const currentLocationSelector = createSelector(
  routerSelector,
  (router) => router.location.pathname,
);