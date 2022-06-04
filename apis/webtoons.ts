import { useQuery } from 'react-query';
import { graph, webtoons } from '@apis/queryKeys';
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
import { Graph } from '@_types/chart-type';

const getWebtoons = async () => {
  return await api
    .get('webtoons')
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const useGetWebtoons = () => {
  return useQuery(webtoons.lists(), () => getWebtoons());
};

const getWebtoonById = async (webtoonId: number) => {
  return await api
    .get(`webtoons/${webtoonId}`)
    .then((res) => res.data)
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
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetWebtoonsRanks = () => {
  return useQuery<WebtoonRank>(webtoons.ranks(), () => getWebtoonsRanks());
};

const getWebtoonsRising = async () => {
  return await api
    .get('webtoons/top-upper')
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetWebtoonsRising = () => {
  return useQuery<WebtoonRising>(webtoons.rising(), () => getWebtoonsRising());
};

const getWebtoonsGenres = async () => {
  return await api
    .get('webtoons/genres')
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetWebtoonsGenres = () => {
  return useQuery<WebtoonGenres>(webtoons.genres(), () => getWebtoonsGenres());
};

const getWebtoonsRecommendation = async () => {
  return await api
    .get('webtoons/ages')
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetWebtoonsRecommendation = () => {
  return useQuery<WebtoonRecommendation>(webtoons.recommendation(), () =>
    getWebtoonsRecommendation(),
  );
};

const getWebtoonsGenresTop3 = async () => {
  return await api
    .get('webtoons/genres/top3')
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetWebtoonsGenresTop3 = () => {
  return useQuery<WebtoonGenresTop3>(webtoons.genresTop3(), () =>
    getWebtoonsGenresTop3(),
  );
};

const getWebtoonsByDay = async (day: string) => {
  return await api
    .get(`webtoons/days/${day}`)
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetWebtoonsByDay = (day: string) => {
  return useQuery<WebtoonWeekly>(webtoons.days(day), () =>
    getWebtoonsByDay(day),
  );
};

const getGraphScore = async (webtoonId: number, chartType: string) => {
  return await api
    .get(`webtoons/${webtoonId}/graph-scores/${chartType}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const useGetGraphScore = (webtoonId: number, chartType: string) => {
  return useQuery<Graph>(graph.lists(webtoonId, chartType), () =>
    getGraphScore(webtoonId, chartType),
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
  getGraphScore,
  useGetGraphScore,
};
