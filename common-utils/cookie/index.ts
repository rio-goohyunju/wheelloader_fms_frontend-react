import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export interface CookieSetOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'none' | 'lax' | 'strict';
  encode?: (value: string) => string;
}

export const setCookie = (
  name: string,
  value: string,
  options?: CookieSetOptions
) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string): string => {
  return cookies.get(name);
};

export const JWT_EXPIRY_TIME = 24 * 3600;

export default cookies;
