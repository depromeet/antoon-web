export interface IComment {
  webtoonId: number;
  discussionId: number;
  content: string;
  userId: number;
  nickname: string;
  imageUrl: string;
  likeCount: number;
  isUserLike: boolean;
}
