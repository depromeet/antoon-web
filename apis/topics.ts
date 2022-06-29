import { useQuery, useMutation, useQueryClient } from 'react-query';
import { topics } from '@apis/queryKeys';
import { instance } from './api';
import {
  AllTopicsByCategory,
  TopicCategory,
  TopicChoices,
} from '@_types/topics-type';

const getAllTopicsByCategory = async (
  category: TopicCategory,
  page: number,
) => {
  return await instance()
    .get(`topics/${category}`, { params: { page, size: 5 } })
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetAllTopicsByCategory = (category: TopicCategory, page = 0) => {
  return useQuery<AllTopicsByCategory>(topics.category(category, page), () =>
    getAllTopicsByCategory(category, page),
  );
};

const getTopicsById = async (id: number) => {
  return await instance()
    .get(`topics/detail/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const useGetTopicsById = (id: number) => {
  return useQuery(topics.list(id), () => getTopicsById(id));
};

const postTopicsById = async (id: number) => {
  return await instance()
    .post(`vote/${id}`, { id: id })
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const usePostTopicsById = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation(topics.post(id), () => postTopicsById(id), {
    onSuccess: () => queryClient.invalidateQueries(topics.list(id)),
  });
};

const getTopicsChoices = async () => {
  return await instance()
    .get(`topics/choices`)
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetTopicsChoices = () => {
  return useQuery<TopicChoices>(topics.choices(), () => getTopicsChoices());
};

export {
  useGetTopicsById,
  usePostTopicsById,
  getAllTopicsByCategory,
  useGetAllTopicsByCategory,
  getTopicsChoices,
  useGetTopicsChoices,
};
