import Cookies from 'universal-cookie';

const USER_TOKEN = 'netti';

const cookies = new Cookies();

export const setSession = token => cookies.set(USER_TOKEN, token, { path: '/' });

export const getSession = () => cookies.get(USER_TOKEN);

export const isAuthenticated = () => getSession() !== '' && getSession() !== undefined;

export const refreshSession = () => {};

export const logout = () => {
  cookies.remove(USER_TOKEN);
  window.location.href = '/';
};
