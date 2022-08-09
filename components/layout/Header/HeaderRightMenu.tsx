import Link from 'next/link';

import SearchIcon from '@assets/icons/SearchIcon';

import ShareButton from './ShareButton';

import { RightWrap } from './HeaderRightMenu.style';

type HeaderRight = '검색' | '공유하기' | '없음';

function HeaderRightMenu({
  headerRight,
  isHeaderPainted,
}: {
  headerRight: HeaderRight;
  isHeaderPainted: boolean;
}) {
  return (
    <RightWrap>
      {headerRight === '검색' ? (
        <Link href="/search" passHref>
          <a>
            <SearchIcon />
          </a>
        </Link>
      ) : headerRight === '공유하기' ? (
        <ShareButton isHeaderPainted={isHeaderPainted} />
      ) : headerRight === '없음' ? (
        <></>
      ) : (
        <></>
      )}
    </RightWrap>
  );
}

export default HeaderRightMenu;
