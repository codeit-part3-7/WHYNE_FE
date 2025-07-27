import { getCookieType, setCookieCallbackType, setCookieType } from '@/types/CookieTypes';

export function getCookie({ name }: getCookieType) {
  const cookieArr = document.cookie.split('; ');
  for (const cookie of cookieArr) {
    const [key, value] = cookie.split('=');
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

export function setCookie({ name, value, maxAge }: setCookieType) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax; Secure`;
}

export function setAuthCookiesWithCallback({
  accessToken,
  refreshToken,
  callback,
}: setCookieCallbackType) {
  setCookie({ name: 'accessToken', value: accessToken, maxAge: 1800 }); // 만료 30분
  setCookie({ name: 'refreshToken', value: refreshToken, maxAge: 604800 }); // 만료 7일
  callback();
}
