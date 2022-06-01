import { useQuery } from 'react-query';
import { comments } from './queryKeys';
import { api } from './api';

const getCommentsById = async (id: number) => {
  return await api
    .get(`webtoons/${id}/discussions`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const useGetCommentsById = (id: number) => {
  return useQuery(comments.lists(id), () => getCommentsById(id));
};

const getCommentsLikedById = async (id: number) => {
  return await api
    .put(`webtoons/discussions/${id}/likes`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const usePutCommentsLikedById = (id: number) => {
  return useQuery(comments.isLiked(id), () => getCommentsLikedById(id), {
    enabled: false,
  });
};

export {
  getCommentsById,
  useGetCommentsById,
  getCommentsLikedById,
  usePutCommentsLikedById,
};
