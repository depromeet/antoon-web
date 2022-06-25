import { useGetProfile } from '@apis/user';
import { useGetCommentsById } from '@apis/comments';
import CommentEditIcon from '@assets/icons/CommentEditIcon';
import CommentEditModal from './CommentEditModal';

import {
  CommentListWrap,
  CommentNoWrap,
  Title,
  CommentWrap,
  MainWrap,
  UserInfo,
  UserInfoDataWrap,
  Name,
  TimeStamp,
  Content,
  EditContent,
  FavoriteWrap,
  Favorite,
} from './Comment.style';

import ProfileImage from '@components/image/ProfileImage';
import FavoriteButton from '@domains/webtoon/detail/FavoriteButton';
import CommentTextInput from '@components/detail/commentTextInput/CommentTextInput';
import OnError from '@components/OnError';
import LoadingSpinner from '@components/spinner/LoadingSpinner';
import ErrorBoundary from '@components/ErrorBoundary';

import { useInView } from 'react-intersection-observer';
import { CommentType, IComment } from '@_types/comments-type';
import { useEffect, useState } from 'react';

function Comment({
  commentType,
  id,
}: {
  commentType: CommentType;
  id: number;
}) {
  const { data: user } = useGetProfile();
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

  const [modalStatus, setModalStatus] = useState(false);

  const [currentDiscussionId, setCurrentDiscussionId] = useState(0);

  const onClickModal = (id: number) => {
    setModalStatus(true);
    setCurrentDiscussionId(id);
  };

  useEffect(() => {
    if (modalStatus) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [modalStatus]);

  const [editStatus, setEditStatus] = useState(false);

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
        {modalStatus && (
          <CommentEditModal
            id={currentDiscussionId}
            setModalStatus={setModalStatus}
            setEditStatus={setEditStatus}
          />
        )}
        <Title>개미들의 행진 {cmmts?.pages[0].totalElements || 0}</Title>
        <CommentTextInput
          length={cmmts?.pages[0].totalElements || 0}
          id={id}
          commentType={commentType}
        />
        <>
          {cmmts?.pages.map((page) => {
            return page.data?.map((comment: IComment) => {
              return (
                <CommentWrap key={comment.discussionId}>
                  {editStatus &&
                  currentDiscussionId === comment.discussionId ? (
                    <div></div>
                  ) : (
                    <>
                      <ProfileImage
                        src={comment.imageUrl}
                        width="32"
                        height="32"
                      />
                      <MainWrap>
                        <UserInfo>
                          <Name>{comment.nickname}</Name>
                          <TimeStamp>{comment.time}</TimeStamp>
                        </UserInfo>
                        <Content>{comment?.content}</Content>
                        <FavoriteWrap>
                          <FavoriteButton
                            isFavoriteChecked={comment.isUserLike}
                            type={commentType}
                            id={comment.discussionId}
                            isUser={isUser}
                          />
                          <Favorite>{comment.likeCount}</Favorite>
                        </FavoriteWrap>
                      </MainWrap>
                    </>
                  )}
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
