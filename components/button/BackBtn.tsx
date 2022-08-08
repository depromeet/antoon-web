import React from 'react';
import { useRouter } from 'next/router';

import BackIcon from '@assets/icons/BackIcon';

type BackBtnProps = {
  isHeaderPainted: boolean;
};

function BackBtn({ isHeaderPainted }: BackBtnProps) {
  const router = useRouter();
  const path = router.asPath;
  const isShared = path.includes('shared');

  return (
    <button onClick={isShared ? () => router.push('/') : () => router.back()}>
      <BackIcon fill={isHeaderPainted ? '#ffffff' : ''} />
    </button>
  );
}

export default BackBtn;
