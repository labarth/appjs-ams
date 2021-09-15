import { createAction } from 'typesafe-actions';
import { SignInPayload } from 'modules/Auth/interfaces/signInInterfaces';

export const signInAction = createAction('sign_in')<SignInPayload>();

export const signOutAction = createAction('sign_out')();