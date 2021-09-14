import { createSelector } from 'reselect';

const appState = (state: any) => state;

export const isAppLoadingSelector = createSelector(
  appState,
  (state: any) => state.appLoading,
);