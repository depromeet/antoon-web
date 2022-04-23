import React from 'react';
import { useRouter } from 'next/router';

import { HeaderWrap } from './Header.style';

import BackIcon from '@components/icon/Icon_Back';
import Logo from 'assets/svgs/Logo';

type HeaderProps = {
  leftBtn?: string;
};

function Header({ leftBtn }: HeaderProps) {
  const router = useRouter();

  return (
    <HeaderWrap>
      {leftBtn === 'logo' ? (
        <button onClick={() => router.reload()}>
          <Logo />
        </button>
      ) : (
        <button onClick={() => router.back()}>
          <BackIcon />
        </button>
      )}
    </HeaderWrap>
  );
}

export default Header;
