import { useQuery } from 'react-query';
import { user } from './queryKeys';
import { api, auth_api } from './api';

const getToken = async (refreshToken: string) => {
  return await api
    .post(
      'auth/refresh',
      {},
      {
        headers: {
          Refresh: refreshToken,
        },
      },
    )
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const useGetToken = (refreshToken: string) => {
  return useQuery(user.tokens(refreshToken), () => getToken(refreshToken), {
    refetchOnMount: 'always',
  });
};

const getUserInformation = async () => {
  return await auth_api
    .get('users')
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const useGetUserInformation = () => {
  return useQuery(user.information(), () => getUserInformation());
};

export { getUserInformation, useGetUserInformation, getToken, useGetToken };
