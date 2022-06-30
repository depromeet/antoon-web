import { useState, useEffect } from 'react';
import Link from 'next/link';

import SearchIcon from '@assets/icons/SearchIcon';
import ShareIcon from '@assets/icons/ShareIcon';

import useScroll from '@hooks/useScroll';

import { RightWrap } from './HeaderRightMenu.style';

type HeaderRight = '검색' | '공유하기' | '없음';

function HeaderRightMenu({
  headerRight,
  headerColor,
}: {
  headerRight: HeaderRight;
  headerColor?: string;
}) {
  const [isHeaderPainted, setIsHeaderPainted] = useState(false);

  useEffect(() => {
    if (headerColor) setIsHeaderPainted(true);
  }, [headerColor]);

  const isScrolled = useScroll();

  useEffect(() => {
    if (isScrolled) setIsHeaderPainted(false);
    else setIsHeaderPainted(true);
  }, [isScrolled]);

  return (
    <RightWrap>
      {headerRight === '검색' ? (
        <Link href="/search" passHref>
          <a>
            <SearchIcon />
          </a>
        </Link>
      ) : headerRight === '공유하기' ? (
        <button>
          {isHeaderPainted ? <ShareIcon fill="#ffffff" /> : <ShareIcon />}
        </button>
      ) : headerRight === '없음' ? (
        <></>
      ) : (
        <></>
      )}
    </RightWrap>
  );
}

export default HeaderRightMenu;
