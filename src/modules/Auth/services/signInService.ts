export interface User {
  email: string;
  name: string;
  surname?: string;
  token: string;
}

export const signInService = ({ email, password }: { email: string; password: string; }) => {
 return new Promise((res, rej) => {
   setTimeout(() => {
     if (email === '1' && password === '1') {
        const user: User = {
          email: 'fake-email@mail.ru',
          name: 'fake-name',
          surname: 'fake-surname',
          token: 'fake-jwt-token'
        };

        return res(user);
     }

     return rej(new Error('incorrect password or email'));
   }, 1000);
 });
}

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