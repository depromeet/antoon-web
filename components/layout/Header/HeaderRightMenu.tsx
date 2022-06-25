import Link from 'next/link';

import SearchIcon from '@assets/icons/SearchIcon';
import ShareIcon from '@assets/icons/ShareIcon';

import { RightWrap } from './HeaderRightMenu.style';

type HeaderRight = '검색' | '공유하기' | '없음';

function HeaderRightMenu({ headerRight }: { headerRight: HeaderRight }) {
  return (
    <RightWrap>
      {headerRight === '검색' ? (
        <Link href="/search" passHref>
          <a>
            <SearchIcon />
          </a>
        </Link>
      ) : headerRight === '공유하기' ? (
        <ShareIcon />
      ) : headerRight === '없음' ? (
        <></>
      ) : (
        <></>
      )}
    </RightWrap>
  );
}

export default HeaderRightMenu;
