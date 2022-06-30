import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import LogoIcon from '@assets/icons/LogoIcon';
import BackIcon from '@assets/icons/BackIcon';

import useScroll from '@hooks/useScroll';

import { LeftWrap } from './HeaderLeftMenu.style';

type HeaderLeft = '로고' | '뒤로가기' | '없음';

function HeaderLeftMenu({
  headerLeft,
  headerColor,
}: {
  headerLeft: HeaderLeft;
  headerColor?: string;
}) {
  const router = useRouter();

  const [isHeaderPainted, setIsHeaderPainted] = useState(false);

  const isScrolled = useScroll();

  useEffect(() => {
    if (headerColor && !isScrolled) setIsHeaderPainted(true);
    else setIsHeaderPainted(false);
  }, [headerColor, isScrolled]);

  return (
    <LeftWrap>
      {headerLeft === '로고' ? (
        <button onClick={() => router.reload()}>
          <LogoIcon />
        </button>
      ) : headerLeft === '뒤로가기' ? (
        <button onClick={() => router.back()}>
          {isHeaderPainted ? <BackIcon fill="#ffffff" /> : <BackIcon />}
        </button>
      ) : headerLeft === '없음' ? (
        <></>
      ) : (
        <></>
      )}
    </LeftWrap>
  );
}

export default HeaderLeftMenu;
