import { useState, useEffect } from 'react';

import HeaderLeftMenu from './HeaderLeftMenu';
import HeaderRightMenu from './HeaderRightMenu';

import { HeaderWrap, Title } from './Header.style';

type HeaderProps = {
  leftBtn?: string;
  title?: string;
  rightBtn?: string;
};

function Header({ leftBtn, title, rightBtn }: HeaderProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <HeaderWrap>
      {!isSSR && (
        <>
          <HeaderLeftMenu leftBtn={leftBtn} />
          {title && <Title>{title}</Title>}
          <HeaderRightMenu rightBtn={rightBtn} />
        </>
      )}
    </HeaderWrap>
  );
}

export default Header;
