import { useMutation, useQuery, useQueryClient } from 'react-query';
import { user } from './queryKeys';
import { instance } from './api';

const postToken = async (refreshToken: string) => {
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

const usePostToken = (refreshToken: string) => {
  return useQuery(user.delete(refreshToken), () => postToken(refreshToken));
};

const getUserInformation = async () => {
  return await instance()
    .get('users')
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const useGetUserInformation = () => {
  return useQuery(user.information(), () => getUserInformation());
};

const postUserLogOut = async () => {
  return await instance()
    .post('auth/logout')
    .catch((e) => console.log(e));
};

const usePostUserLogOut = () => {
  const queryClient = useQueryClient();
  return useMutation(user.logout(), () => postUserLogOut(), {
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

const patchUserImg = async (image: string) => {
  return await instance()
    .patch('users/images', image, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .catch((e) => console.log(e));
};

const usePatchUserImg = (image: string) => {
  const queryClient = useQueryClient();
  return useMutation(user.updateImg(image), () => patchUserImg(image), {
    onSuccess: () => queryClient.invalidateQueries('user'),
  });
};

export {
  useGetUserInformation,
  usePostToken,
  usePostUserLogOut,
  patchName,
  usePatchName,
  usePatchUserImg,
};
