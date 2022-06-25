import { useQuery } from 'react-query';
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

export { getAllTopicsByCategory, useGetAllTopicsByCategory };
