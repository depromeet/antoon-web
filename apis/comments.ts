import { useQuery } from 'react-query';
import { comments } from './queryKeys';
import { api } from './api';

const getCommentsById = async (id: number) => {
  return await api
    .get(`webtoons/${id}/discussions`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

const useGetCommentsById = (id: number) => {
  return useQuery(comments.lists(id), () => getCommentsById(id));
};

export { getCommentsById, useGetCommentsById };
