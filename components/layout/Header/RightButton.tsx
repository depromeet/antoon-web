import Link from 'next/link';

import SearchIcon from '@assets/icons/SearchIcon';

import ShareButton from '@components/layout/Header/ShareButton';

import { RightWrap } from '@components/layout/Header/RightButton.style';

type HeaderRight = '검색' | '공유하기' | '없음';

function RightButton({
  right,
  isPainted,
}: {
  right: HeaderRight;
  isPainted: boolean;
}) {
  return (
    <RightWrap>
      {right === '검색' ? (
        <Link href="/search" passHref>
          <a>
            <SearchIcon />
          </a>
        </Link>
      ) : right === '공유하기' ? (
        <ShareButton isPainted={isPainted} />
      ) : right === '없음' ? (
        <></>
      ) : (
        <></>
      )}
    </RightWrap>
  );
}

export default RightButton;
