import { useQuery, useMutation, useQueryClient } from 'react-query';
import { topics } from '@apis/queryKeys';
import { instance } from './api';
import { AllTopicsByCategory, TopicCategory } from '@_types/topics-type';

const getAllTopicsByCategory = async (category: TopicCategory) => {
  return await instance()
    .get(`topics/${category}`)
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const useGetAllTopicsByCategory = (category: TopicCategory) => {
  return useQuery<AllTopicsByCategory>(topics.category(category), () =>
    getAllTopicsByCategory(category),
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

export {
  useGetTopicsById,
  usePostTopicsById,
  getAllTopicsByCategory,
  useGetAllTopicsByCategory,
};
