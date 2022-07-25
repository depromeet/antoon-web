import { comments } from './queryKeys';
import { instance } from './api';
import { CommentType } from '@_types/comments-type';
import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query';

const getCommentsById = async (
  commentType: CommentType,
  id: number,
  pageParam: number,
) => {
  const { data, lastPage, totalElements } = await instance()
    .get(`${commentType}/${id}/discussions?page=${pageParam}&size=10`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
  return { data, nextPage: pageParam + 1, lastPage, totalElements };
};

const useGetCommentsById = (
  commentType: CommentType,
  id: number,
  pageParam: number,
) => {
  return useInfiniteQuery(
    comments.lists(commentType, id, pageParam),
    ({ pageParam = 0 }) => getCommentsById(commentType, id, pageParam),
    {
      getNextPageParam: (lastPage) =>
        !lastPage.lastPage ? lastPage.nextPage : undefined,
    },
  );
};

const putCommentsLikedById = async (commentType: CommentType, id: number) => {
  return await instance()
    .put(`${commentType}/discussions/${id}/likes`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const usePutCommentsLikedById = (commentType: CommentType, id: number) => {
  const queryClient = useQueryClient();
  return useMutation(
    comments.isLiked(commentType, id),
    () => putCommentsLikedById(commentType, id),
    {
      onSuccess: () => queryClient.invalidateQueries('comments'),
    },
  );
};

const postCommentsById = async (
  commentType: CommentType,
  id: number,
  content: string,
) => {
  return await instance()
    .post(`${commentType}/${id}/discussions`, { content: content })
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const usePostCommentsById = (
  commentType: CommentType,
  id: number,
  content: string,
) => {
  const queryClient = useQueryClient();
  return useMutation(
    comments.create(commentType, id, content),
    () => postCommentsById(commentType, id, content),
    {
      onSuccess: () =>
        queryClient.invalidateQueries(comments.lists(commentType, id, 0)),
    },
  );
};

export {
  getCommentsById,
  useGetCommentsById,
  putCommentsLikedById,
  usePutCommentsLikedById,
  postCommentsById,
  usePostCommentsById,
};
