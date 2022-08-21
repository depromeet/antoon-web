import React from 'react';
import { useRouter } from 'next/router';

import BackIcon from '@assets/icons/BackIcon';

type BackButtonProps = {
  isPainted: boolean;
};

function BackButton({ isPainted }: BackButtonProps) {
  const router = useRouter();
  const path = router.asPath;
  const isShared = path.includes('shared');

  return (
    <button onClick={isShared ? () => router.push('/') : () => router.back()}>
      <BackIcon fill={isPainted ? '#ffffff' : ''} />
    </button>
  );
}

export default BackButton;
