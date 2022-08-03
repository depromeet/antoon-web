import { useGetUserInformation } from '@apis/user';
import { useGetCommentsById } from '@apis/comments';

import {
  CommentListWrap,
  CommentNoWrap,
  Title,
  CommentWrap,
  MainWrap,
  UserInfo,
  Name,
  TimeStamp,
  Content,
  FavoriteWrap,
  Favorite,
} from './Comment.style';

import UserProfile from '@components/image/UserProfile';
import FavoriteBtn from '@components/button/FavoriteBtn';
import CommentTextInput from '@components/detail/commentTextInput/CommentTextInput';
import OnError from '@components/OnError';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import ErrorBoundary from '@components/ErrorBoundary';

import { useInView } from 'react-intersection-observer';
import { CommentType, Comments, IComment } from '@_types/comments-type';
import { useEffect, useState } from 'react';

function Comment({
  commentType,
  id,
}: {
  commentType: CommentType;
  id: number;
}) {
  const { data: user } = useGetUserInformation();
  const { ref, inView } = useInView();
  const {
    data: cmmts,
    isError,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetCommentsById(commentType, id, 0);

  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (inView && cmmts?.pages) {
      fetchNextPage();
    }
    if (user) setIsUser(true);
    else setIsUser(false);
  }, [cmmts, user, inView, fetchNextPage]);

  if (isLoading)
    return (
      <CommentNoWrap commentType={commentType}>
        <LoadingSpinner />
      </CommentNoWrap>
    );
  else if (isError)
    return <OnError>댓글을 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <ErrorBoundary message="댓글을 불러오지 못하고 있어요 😭😭😭">
      <CommentListWrap commentType={commentType}>
        <Title>개미들의 행진 {cmmts?.pages[0].totalElements || 0}</Title>
        <CommentTextInput
          length={cmmts?.pages[0].totalElements || 0}
          id={id}
          commentType={commentType}
        />
        <>
          {cmmts?.pages.map((page, index) => {
            return page.data?.map((comment: IComment) => {
              return (
                <CommentWrap key={comment.discussionId}>
                  <UserProfile src={comment.imageUrl} width="32" height="32" />
                  <MainWrap>
                    <UserInfo>
                      <Name>{comment.nickname}</Name>
                      <TimeStamp>{comment.time}</TimeStamp>
                    </UserInfo>
                    <Content>{comment?.content}</Content>
                    <FavoriteWrap>
                      <FavoriteBtn
                        isFavoriteChecked={comment.isUserLike}
                        type={commentType}
                        id={comment.discussionId}
                        isUser={isUser}
                      />
                      <Favorite>{comment.likeCount}</Favorite>
                    </FavoriteWrap>
                  </MainWrap>
                </CommentWrap>
              );
            });
          })}
        </>
        {isFetchingNextPage ? <LoadingSpinner /> : <div ref={ref}></div>}
      </CommentListWrap>
    </ErrorBoundary>
  );
}

export default Comment;
