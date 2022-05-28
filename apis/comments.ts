import { useQuery } from 'react-query';
import { comments } from './queryKeys';
import { api } from './api';

const getCommentsById = async (webtoonId: string | string[] | undefined) => {
  return await api
    .get(`webtoons/${webtoonId}/discussions`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

const useGetCommentsById = (webtoonId: string | string[] | undefined) => {
  return useQuery(comments.lists(webtoonId), () => getCommentsById(webtoonId));
};

export { getCommentsById, useGetCommentsById };
