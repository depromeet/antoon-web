import { TopicCategory } from '@_types/topics-type';
import { CommentType } from '@_types/comments-type';
import { Genre } from '@_types/webtoon-type';

const webtoons = {
  all: ['webtoons'],
  lists: () => [...webtoons.all, 'lists'],
  list: (id: number) => [...webtoons.lists(), id],
  ranks: () => [...webtoons.all, 'ranks'],
  genres: (genre: Genre, pageParam: number) => [
    ...webtoons.all,
    'genres',
    genre,
    pageParam,
  ],
  genresTop3: () => [...webtoons.all, 'genres', 'top3'],
  rising: () => [...webtoons.all, 'rising'],
  recommendation: () => [...webtoons.all, 'recommendation'],
  joinLeave: (webtoonId: number, status: string) => [
    ...webtoons.all,
    'joinLeave',
  ],
  days: (day: string) => [...webtoons.all, 'days', day],
  characters: (category: any) => [...topics.all, 'characters', category],
  charactersInfo: (id: number) => [...topics.all, 'charactersInfo', id],
  charactersVote: (id: number) => [...topics.all, 'charactersVote', id],
};

const topics = {
  all: ['topics'],
  category: (category: TopicCategory, page: number) => [
    ...topics.all,
    'category',
    category,
  ],
  lists: () => [...topics.all, 'topics'],
  list: (id: number) => [...topics.lists(), id],
  post: (id: number) => [...topics.list(id), 'patch', id],
  choices: () => [...topics.all, 'choices'],
};

const comments = {
  all: ['comments'],
  lists: (commentType: CommentType, id: number, pageParam: number) => [
    ...comments.all,
    'lists',
    id,
  ],
  create: (commentType: CommentType, id: number, content: string) => [
    ...comments.all,
    'create',
    id,
    content,
  ],
  patch: (commentType: CommentType, id: number, content: string) => [
    ...comments.all,
    'patch',
    id,
    content,
  ],
  delete: (commentType: CommentType, id: number) => [
    ...comments.all,
    'delete',
    id,
  ],
  isLiked: (commentType: CommentType, id: number) => [
    ...comments.all,
    'isLiked',
    id,
  ],
};

const user = {
  all: ['user'],
  tokens: (refreshToken: string) => [...user.all, 'tokens', refreshToken],
  delete: (refreshToken: string) => [...user.all, 'delete', refreshToken],
  information: () => [...user.all, 'information'],
  logout: () => [...user.all, 'logout'],
  updateName: (userName: string) => [...user.all, 'update', userName],
  updateImg: (userImg: string) => [...user.all, 'update', userImg],
};

const graph = {
  all: ['graph'],
  lists: (id: number, chartType: string) => [...graph.all, id, chartType],
};

export { webtoons, comments, graph, user, topics };
