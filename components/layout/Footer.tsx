import React from 'react';
import Link from 'next/link';

import { FooterWrap, Nav } from './Footer.style';

function Footer() {
  return (
    <FooterWrap>
      <Link href="/" passHref>
        <a>
          <Nav>HOME</Nav>
        </a>
      </Link>
      <Link href="/search" passHref>
        <a>
          <Nav>SEARCH</Nav>
        </a>
      </Link>
      <Link href="/user/signin" passHref>
        <a>
          <Nav>MY PAGE</Nav>
        </a>
      </Link>
    </FooterWrap>
  );
}

export default Footer;
