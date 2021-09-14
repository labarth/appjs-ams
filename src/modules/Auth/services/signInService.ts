export const signInService = ({ email, password }: { email: string; password: string; }) => {
 return new Promise((res, rej) => {
   setTimeout(() => {
     if (email === '1' && password === '1') {
        return res('fake-jwt-token');
     }

     return rej(new Error('incorrect password or email'));
   }, 1000);
 });
}

export const isAuthService = (token: string) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (token === 'fake-jwt-token') {
        return res('fake-jwt-token');
      }

      return rej(new Error('this user is not authorize'));
    }, 1000);
  });
}