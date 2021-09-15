import { APIService } from 'common/services/APIService';

export interface User {
  email: string;
  name: string;
  surname?: string;
  token: string;
}

export const signInService = ({ email, password }: { email: string; password: string; }) => {
  return APIService.post('auth/login', { email, password });
};

export const isAuthService = (token: string) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (token === 'fake-jwt-token') {
        const user: User = {
          email: 'fake-email@mail.ru',
          name: 'fake-name',
          surname: 'fake-surname',
          token: 'fake-jwt-token'
        };

        return res(user);
      }

      return rej(new Error('this user is not authorize'));
    }, 1000);
  });
}