import ky from 'ky';

export const api = ky.create({
  prefixUrl:
    process.env.NEXT_PUBLIC_API_ENDPOINT || 'https://api.antoon.fun/api/v1/',
});
