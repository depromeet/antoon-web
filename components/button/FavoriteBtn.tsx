import React, { useState, useCallback } from 'react';

import HeartIcon from '@assets/icons/HeartIcon';

type FavoriteProps = {
  isFavoriteChecked: boolean;
};

function FavoriteBtn({ isFavoriteChecked }: FavoriteProps) {
  const [isLiked, setIsLiked] = useState(isFavoriteChecked);

  const onClickFavorite = useCallback(() => {
    setIsLiked((isLiked) => !isLiked);
  }, []);

  return <HeartIcon fill={isLiked} onClick={onClickFavorite} />;
}

export default FavoriteBtn;
