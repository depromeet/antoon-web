import { useQuery } from 'react-query';
import { webtoons } from '@apis/queryKeys';
import { api } from './api';
import {
  WebtoonRank,
  WebtoonGenres,
  WebtoonRising,
  WebtoonWeekly,
  WebtoonRecommendation,
  WebtoonGenresTop3,
  Webtoon,
} from '@_types/webtoon-type';
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
  return useQuery<Webtoon>(webtoons.list(webtoonId), () =>
    getWebtoonById(webtoonId),
  );
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

const getWebtoonsRising = async () => {
  return await api
    .get('webtoons/top-upper')
    .then((res) => res.json())
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetWebtoonsRising = () => {
  return useQuery<WebtoonRising, HTTPError>(webtoons.rising(), () =>
    getWebtoonsRising(),
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

const getWebtoonsRecommendation = async () => {
  return await api
    .get('webtoons/ages')
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

const useGetWebtoonsRecommendation = () => {
  return useQuery<WebtoonRecommendation, HTTPError>(
    webtoons.recommendation(),
    () => getWebtoonsRecommendation(),
  );
};

const getWebtoonsGenresTop3 = async () => {
  return await api
    .get('webtoons/genres/top3')
    .then((res) => res.json())
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetWebtoonsGenresTop3 = () => {
  return useQuery<WebtoonGenresTop3, HTTPError>(webtoons.genresTop3(), () =>
    getWebtoonsGenresTop3(),
  );
};

const getWebtoonsByDay = async (day: string) => {
  return await api
    .get(`webtoons/days/${day}`)
    .then((res) => res.json())
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetWebtoonsByDay = (day: string) => {
  return useQuery<WebtoonWeekly, HTTPError>(webtoons.days(day), () =>
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
  getWebtoonsGenresTop3,
  useGetWebtoonsGenresTop3,
  getWebtoonsRising,
  useGetWebtoonsRising,
  getWebtoonsRecommendation,
  useGetWebtoonsRecommendation,
  getWebtoonsByDay,
  useGetWebtoonsByDay,
};
