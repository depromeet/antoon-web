import { useState } from 'react';

import { usePutCommentsLikedById } from '@apis/comments';

import HeartIcon from '@assets/icons/HeartIcon';

import { useToast } from '@hooks/useToast';

import { CommentType } from '@_types/comments-type';

type FavoriteProps = {
  isFavoriteChecked: boolean;
  type: CommentType;
  id: number;
  isUser: boolean;
};

function FavoriteBtn({ isFavoriteChecked, type, id, isUser }: FavoriteProps) {
  const [isLiked, setIsLiked] = useState(isFavoriteChecked);

  const { fireToast } = useToast();

  const { mutate: mutateFavoriteBtn } = usePutCommentsLikedById(type, id);

  const onClickFavorite = () => {
    if (isUser) {
      setIsLiked((isLiked) => !isLiked);
      mutateFavoriteBtn();
    } else {
      fireToast({ joinLeaveStatus: 'NO-LOGIN' });
    }
  };

  return <HeartIcon fill={isLiked} onClickFavorite={onClickFavorite} />;
}

export default FavoriteBtn;
