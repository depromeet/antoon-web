import React from 'react';
import Link from 'next/link';

import { HeaderWrap } from './Header.style';

import Logo from 'assets/svgs/Logo';

function Header() {
  return (
    <HeaderWrap>
      <Link href="/" passHref>
        <a>
          <Logo />
        </a>
      </Link>
    </HeaderWrap>
  );
}

export default Header;
