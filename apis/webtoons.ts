import { useQuery } from 'react-query';
import { webtoons } from '@apis/queryKeys';
import { api } from '.';

const getWebtoons = async () => {
  return await api.get('webtoons').json();
};

const useGetWebtoons = () => {
  return useQuery(webtoons.all, getWebtoons);
};

export { getWebtoons, useGetWebtoons };
