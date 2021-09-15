import { APIService } from 'common/services/APIService';

export interface User {
  email: string;
  name: string;
  surname?: string;
  token: string;
}

export const signInService = ({ email, password }: { email: string; password: string; }) => (
  APIService.post('auth/login', { email, password })
);

export const isAuthService = (token: string) => APIService.post('auth', { token });