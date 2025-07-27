export interface getCookieType {
  name: string;
}

export interface setCookieType {
  name: string;
  value: string;
  maxAge: number;
}

export interface setCookieCallbackType {
  accessToken: string;
  refreshToken: string;
  callback: () => void;
}
