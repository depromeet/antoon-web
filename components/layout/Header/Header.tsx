import { useState, useEffect } from 'react';

import HeaderLeftMenu from './HeaderLeftMenu';
import HeaderRightMenu from './HeaderRightMenu';

import { HeaderWrap, Title } from './Header.style';

type HeaderLeft = '로고' | '뒤로가기' | '없음';
type HeaderRight = '검색' | '공유하기' | '없음';

type HeaderProps = {
  headerLeft: HeaderLeft;
  headerTitle?: string;
  headerRight: HeaderRight;
};

function Header({ headerLeft, headerTitle, headerRight }: HeaderProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <HeaderWrap>
      {!isSSR && (
        <>
          <HeaderLeftMenu headerLeft={headerLeft} />
          {headerTitle && <Title>{headerTitle}</Title>}
          <HeaderRightMenu headerRight={headerRight} />
        </>
      )}
    </HeaderWrap>
  );
}

export default Header;
