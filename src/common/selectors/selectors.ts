import { createSelector } from 'reselect';
import { RootState } from 'configureStore';

const appState = (state: RootState) => state;

export const isAppLoadingSelector = createSelector(
  appState,
  (state: RootState) => state.appLoading,
);