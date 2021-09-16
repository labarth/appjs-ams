export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface User {
  email: string;
  name: string;
  surname?: string;
  token: string;
}