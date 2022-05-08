import { useQuery } from 'react-query';
import { webtoons } from '@apis/queryKeys';
import { api } from '.';

const getWebtoons = async () => {
  return await api.get('webtoons').json();
};

const getWebtoonById = async (webtoonId: number) => {
  return await api.get(`webtoons/${webtoonId}`).json();
};

const useGetWebtoons = () => {
  return useQuery(webtoons.lists(), () => getWebtoons());
};

const useGetWebtoonById = (webtoonId: number) => {
  return useQuery(webtoons.list(webtoonId), () => getWebtoonById(webtoonId));
};

export { getWebtoons, getWebtoonById, useGetWebtoons, useGetWebtoonById };
