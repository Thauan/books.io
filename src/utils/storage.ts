export const TOKEN_KEY = '@ioasys-token';

export const isAuthenticated: any = () =>
  localStorage.getItem(TOKEN_KEY) !== null;

export const getToken: any = () => localStorage.getItem(TOKEN_KEY);

export const login: any = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout: any = () => {
  localStorage.removeItem(TOKEN_KEY);
};
