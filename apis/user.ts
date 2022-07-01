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
  return useMutation(user.logout(), () => postUserLogOut());
};

const patchUserName = async (userName: string) => {
  return await instance()
    .patch('users/names', {
      name: userName,
    })
    .catch((e) => console.log(e));
};

const usePatchUserName = (userName: string) => {
  const queryClient = useQueryClient();
  return useMutation(user.updateName(userName), () => patchUserName(userName), {
    onSuccess: () => queryClient.invalidateQueries('user'),
  });
};

const patchUserImg = async (userImg: string) => {
  return await instance()
    .patch('users/images', userImg, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .catch((e) => console.log(e));
};

const usePatchUserImg = (userImg: string) => {
  const queryClient = useQueryClient();
  return useMutation(user.updateImg(userImg), () => patchUserImg(userImg), {
    onSuccess: () => queryClient.invalidateQueries(user.information()),
  });
};

export {
  useGetUserInformation,
  usePostToken,
  usePostUserLogOut,
  patchUserName,
  usePatchUserName,
  usePatchUserImg,
};
