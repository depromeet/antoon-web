import { useQuery } from 'react-query';
import { webtoons } from '@apis/queryKeys';
import { api } from '.';
import { WebtoonGenres, WebtoonRank } from '@_types/webtoon-type';
import { HTTPError } from 'ky';

const getWebtoons = async () => {
  return await api
    .get('webtoons')
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

const useGetWebtoons = () => {
  return useQuery(webtoons.lists(), () => getWebtoons());
};

const getWebtoonById = async (webtoonId: number) => {
  return await api
    .get(`webtoons/${webtoonId}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

const useGetWebtoonById = (webtoonId: number) => {
  return useQuery(webtoons.list(webtoonId), () => getWebtoonById(webtoonId));
};

const getWebtoonsRanks = async () => {
  return await api
    .get('top-ranks')
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

const useGetWebtoonsRanks = () => {
  return useQuery<WebtoonRank, HTTPError>(webtoons.ranks(), () =>
    getWebtoonsRanks(),
  );
};

const getWebtoonsGenres = async () => {
  return await api
    .get('webtoons/genres')
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

const useGetWebtoonsGenres = () => {
  return useQuery<WebtoonGenres, HTTPError>(webtoons.genres(), () =>
    getWebtoonsGenres(),
  );
};

const getWebtoonsByDay = async (day: string) => {
  return await api
    .get(`days/${day}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

const useGetWebtoonsByDay = (day: string) => {
  return useQuery<any, HTTPError>(webtoons.days(day), () =>
    getWebtoonsByDay(day),
  );
};

export {
  getWebtoons,
  useGetWebtoons,
  getWebtoonById,
  useGetWebtoonById,
  getWebtoonsRanks,
  useGetWebtoonsRanks,
  getWebtoonsGenres,
  useGetWebtoonsGenres,
  getWebtoonsByDay,
  useGetWebtoonsByDay,
};
