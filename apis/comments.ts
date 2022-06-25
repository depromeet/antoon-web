import { useMutation, useQuery, useQueryClient } from 'react-query';
import { comments } from './queryKeys';
import { instance } from './api';
import { CommentType } from '@_types/comments-type';

const getCommentsById = async (commentType: CommentType, id: number) => {
  return await instance()
    .get(`${commentType}/${id}/discussions`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const useGetCommentsById = (commentType: CommentType, id: number) => {
  return useQuery(comments.lists(commentType, id), () =>
    getCommentsById(commentType, id),
  );
};

const getCommentsLikedById = async (commentType: CommentType, id: number) => {
  return await instance()
    .put(`${commentType}/discussions/${id}/likes`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const usePutCommentsLikedById = (commentType: CommentType, id: number) => {
  return useQuery(
    comments.isLiked(commentType, id),
    () => getCommentsLikedById(commentType, id),
    {
      enabled: false,
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
        queryClient.invalidateQueries(comments.lists(commentType, id)),
    },
  );
};

export {
  getCommentsById,
  useGetCommentsById,
  getCommentsLikedById,
  usePutCommentsLikedById,
  postCommentsById,
  usePostCommentsById,
};
