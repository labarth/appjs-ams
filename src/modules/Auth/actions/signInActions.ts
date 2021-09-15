import { createAction } from 'typesafe-actions';
import { SignInPayload } from 'modules/Auth/interfaces/signInInterfaces';
import { User } from 'modules/Auth/services/signInService';

export const signInAction = createAction('sign_in')<SignInPayload>();

export const signOutAction = createAction('sign_out')();

export const setUser = createAction('set_user')<User>();