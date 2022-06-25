export type Comments = WebtoonComment[] | TopicComment[];

export interface WebtoonComment extends IComment {
  webtoonId: number;
}
export interface TopicComment extends IComment {
  topicId: number;
}

export interface IComment {
  discussionId: number;
  content: string;
  userId: number;
  nickname: string;
  imageUrl: string;
  likeCount: number;
  isUserLike: boolean;
  time: string;
}

export type CommentType = 'webtoons' | 'topics';
