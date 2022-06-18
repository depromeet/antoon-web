import { useState, useEffect } from 'react';

import HeaderLeftMenu from './HeaderLeftMenu';
import HeaderRightMenu from './HeaderRightMenu';

import { HeaderWrap, Title } from './Header.style';

type LeftBtn = 'logo' | undefined;
type RightBtn = 'menu' | 'profile' | 'share' | undefined;

type HeaderProps = {
  leftBtn?: LeftBtn;
  title?: string;
  rightBtn?: RightBtn;
  imageUrl?: string;
};

function Header({ leftBtn, title, rightBtn, imageUrl }: HeaderProps) {
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
          <HeaderRightMenu rightBtn={rightBtn} imageUrl={imageUrl} />
        </>
      )}
    </HeaderWrap>
  );
}

export default Header;
