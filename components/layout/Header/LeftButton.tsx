import { useRouter } from 'next/router';

import LogoIcon from '@assets/icons/LogoIcon';

import BackButton from '@components/layout/Header/BackButton';

import { LeftWrap } from '@components/layout/Header/LeftButton.style';

type HeaderLeft = '로고' | '뒤로가기' | '없음';

function LeftButton({
  left,
  isPainted,
}: {
  left: HeaderLeft;
  isPainted: boolean;
}) {
  const router = useRouter();

  return (
    <LeftWrap>
      {left === '로고' ? (
        <button onClick={() => router.reload()}>
          <LogoIcon />
        </button>
      ) : left === '뒤로가기' ? (
        <BackButton isPainted={isPainted} />
      ) : left === '없음' ? (
        <></>
      ) : (
        <></>
      )}
    </LeftWrap>
  );
}

export default LeftButton;
