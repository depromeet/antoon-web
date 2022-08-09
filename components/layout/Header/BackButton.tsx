import React from 'react';
import { useRouter } from 'next/router';

import BackIcon from '@assets/icons/BackIcon';

type BackButtonProps = {
  isHeaderPainted: boolean;
};

function BackButton({ isHeaderPainted }: BackButtonProps) {
  const router = useRouter();
  const path = router.asPath;
  const isShared = path.includes('shared');

  return (
    <button onClick={isShared ? () => router.push('/') : () => router.back()}>
      <BackIcon fill={isHeaderPainted ? '#ffffff' : ''} />
    </button>
  );
}

export default BackButton;
