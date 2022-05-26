import ky, { BeforeRequestHook } from 'ky';
import { getCookie } from 'cookies-next';

export const beforeRequest: BeforeRequestHook = (request) => {
  const token = getCookie('access');

  token && request.headers.append('Authorization', `Bearer ${token}`);
};

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_ENDPOINT,
  hooks: { beforeRequest: [beforeRequest] },
});
