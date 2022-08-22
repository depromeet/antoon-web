import { useMutation, useQuery, useQueryClient } from 'react-query';
import { user } from './queryKeys';
import { instance } from './api';

const postTokenReIssue = async (refreshToken: string) => {
  return await instance()
    .post(
      'auth/refresh',
      {},
      {
        headers: {
          Refresh: refreshToken,
        },
      },
    )
    .catch((e) => console.log(e));
};

const usePostTokenReIssue = (refreshToken: string) => {
  return useQuery(user.tokenReIssue(refreshToken), () =>
    postTokenReIssue(refreshToken),
  );
};

const getProfile = async () => {
  return await instance()
    .get('users')
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const useGetProfile = () => {
  return useQuery(user.profile(), () => getProfile());
};

const postLogout = async () => {
  return await instance()
    .post('auth/logout')
    .catch((e) => console.log(e));
};

const usePostLogout = () => {
  const queryClient = useQueryClient();
  return useMutation(user.logout(), () => postLogout(), {
    onSuccess: () => queryClient.invalidateQueries('user'),
  });
};

const patchName = async (name: string) => {
  return await instance()
    .patch('users/names', {
      name: name,
    })
    .catch((e) => console.log(e));
};

const usePatchName = (name: string) => {
  const queryClient = useQueryClient();
  return useMutation(user.updateName(name), () => patchName(name), {
    onSuccess: () => queryClient.invalidateQueries('user'),
  });
};

const patchImage = async (image: string) => {
  return await instance()
    .patch('users/images', image, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .catch((e) => console.log(e));
};

const usePatchImage = (image: string) => {
  const queryClient = useQueryClient();
  return useMutation(user.updateImage(image), () => patchImage(image), {
    onSuccess: () => queryClient.invalidateQueries('user'),
  });
};

const getCoins = async () => {
  return await instance()
    .get('coins/history')
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const useGetCoins = () => {
  return useQuery(user.coins(), () => getCoins());
};

export {
  useGetProfile,
  usePostTokenReIssue,
  usePostLogout,
  usePatchName,
  usePatchImage,
  useGetCoins,
};
