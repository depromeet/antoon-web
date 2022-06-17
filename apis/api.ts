import axios from 'axios';
import { getCookie } from 'cookies-next';

export const instance = () => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  });

  const accessToken = getCookie('Access');

  api.defaults.headers.common['Authorization'] = accessToken
    ? `Bearer ${accessToken}`
    : '';

  return api;
};
