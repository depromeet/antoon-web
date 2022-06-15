import axios from 'axios';
import { getCookie } from 'cookies-next';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

export const auth_api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: { Authorization: `Bearer ${getCookie('Access')}` },
});
