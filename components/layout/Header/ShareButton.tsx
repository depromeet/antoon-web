import React from 'react';
import { useRouter } from 'next/router';

import ShareIcon from '@assets/icons/ShareIcon';

import shareAPI from '@utils/shareAPI';

type ShareButtonProps = {
  isHeaderPainted: boolean;
};

function ShareButton({ isHeaderPainted }: ShareButtonProps) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <button onClick={() => shareAPI(path)}>
      <ShareIcon fill={isHeaderPainted ? '#FFFFFF' : ''} />
    </button>
  );
}

export default ShareButton;
