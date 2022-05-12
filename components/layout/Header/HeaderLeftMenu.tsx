import { useRouter } from 'next/router';

import LogoIcon from '@assets/icons/LogoIcon';
import BackIcon from '@assets/icons/BackIcon';

import { LeftWrap } from './HeaderLeftMenu.style';

function HeaderLeftMenu({ leftBtn }: { leftBtn?: string }) {
  const router = useRouter();

  return (
    <LeftWrap>
      {leftBtn === 'logo' ? (
        <button onClick={() => router.reload()}>
          <LogoIcon />
        </button>
      ) : (
        <button onClick={() => router.back()}>
          <BackIcon />
        </button>
      )}
    </LeftWrap>
  );
}

export default HeaderLeftMenu;
