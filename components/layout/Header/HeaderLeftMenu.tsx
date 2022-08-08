import { useRouter } from 'next/router';

import LogoIcon from '@assets/icons/LogoIcon';

import BackBtn from '@components/button/BackBtn';

import { LeftWrap } from './HeaderLeftMenu.style';

type HeaderLeft = '로고' | '뒤로가기' | '없음';

function HeaderLeftMenu({
  headerLeft,
  isHeaderPainted,
}: {
  headerLeft: HeaderLeft;
  isHeaderPainted: boolean;
}) {
  const router = useRouter();

  return (
    <LeftWrap>
      {headerLeft === '로고' ? (
        <button onClick={() => router.reload()}>
          <LogoIcon />
        </button>
      ) : headerLeft === '뒤로가기' ? (
        <BackBtn isHeaderPainted={isHeaderPainted} />
      ) : headerLeft === '없음' ? (
        <></>
      ) : (
        <></>
      )}
    </LeftWrap>
  );
}

export default HeaderLeftMenu;
